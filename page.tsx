"use client";
import React, { useEffect, useRef, useState } from "react";

type Prediction = {
  x: number;
  y: number;
  width: number;
  height: number;
  class: string;
  confidence: number;
};

const VALID_CLASSES = ["cardboard", "glass", "metal", "plastic", "battery"] as const;


const MIN_CONF = 0.2; // lower => more detections (tune live)

const IDEA_BANK: Record<string, string[]> = {
  cardboard: ["Cardboard Lab", "Cardboard Calender", "Cable organizers"],
  glass: ["Flower vase", "Candle holder", "Mini terrarium"],
  metal: ["Desk pen stand", "Tool hanger", "Plant pot cover"],
  plastic: ["Planter", "Storage bin", "Desk caddy"],
  battery: ["Safe disposal only", "Take to an e-waste drop-off", "Store with taped terminals"],
};

export default function DemoPage() {
  const [mode, setMode] = useState<"upload" | "webcam" | "sample">("upload");
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [preds, setPreds] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const predict = async (image: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Predict failed");
    }
  };

  const drawBoxes = (w: number, h: number) => {
    const c = canvasRef.current;
    if (!c) return;
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 3;
    ctx.font = "14px system-ui, sans-serif";

    preds.forEach((p) => {
      const x = p.x - p.width / 2;
      const y = p.y - p.height / 2;

      ctx.strokeStyle = "#00ff88";
      ctx.strokeRect(x, y, p.width, p.height);

      const label = `${p.class} ${(p.confidence * 100).toFixed(0)}%`;
      const padX = 6;
      const textW = ctx.measureText(label).width + padX * 2;
      const textH = 18;

      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(x, Math.max(0, y - textH), textW, textH);

      ctx.fillStyle = "#ffffff";
      ctx.fillText(label, x + padX, Math.max(12, y - 4));
    });
  };

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const handle = () => drawBoxes(img.naturalWidth, img.naturalHeight);
    img.addEventListener("load", handle);
    return () => img.removeEventListener("load", handle);
  }, [preds]);


  useEffect(() => {
    let timer: number | undefined;
    let active = false;

    const tick = async () => {
      if (!active) return;

      const v = videoRef.current;
      if (v && v.readyState >= 2) {
        const maxSide = 640; // speed/latency sweet spot
        const scale = Math.min(maxSide / v.videoWidth, maxSide / v.videoHeight, 1);

        const oc = document.createElement("canvas");
        oc.width = Math.round(v.videoWidth * scale);
        oc.height = Math.round(v.videoHeight * scale);

        const octx = oc.getContext("2d");
        if (octx) {
          octx.drawImage(v, 0, 0, oc.width, oc.height);
          const frame = oc.toDataURL("image/jpeg", 0.85);
          await predict(frame);
          drawBoxes(oc.width, oc.height);
        }
      }

      timer = window.setTimeout(tick, 450); // ~2.2 fps; tune to your Wi-Fi/rate limits
    };

    const start = async () => {
      if (mode !== "webcam") return;
      setImgSrc(null);
      setPreds([]);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        active = true;
        tick();
      } catch {
        alert("Webcam permission denied or unavailable.");
      }
    };

    const stop = () => {
      active = false;
      if (timer) window.clearTimeout(timer);
      const v = videoRef.current;
      if (v?.srcObject) (v.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
    };

    start();
    return stop;
  }, [mode]);

  // ---- Upload handler: downscale to ~1280 longest side ----
  const onUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const original = new Image();
      original.onload = async () => {
        const maxSide = 1280;
        const scale = Math.min(maxSide / original.width, maxSide / original.height, 1);
        const oc = document.createElement("canvas");
        oc.width = Math.round(original.width * scale);
        oc.height = Math.round(original.height * scale);
        const ctx = oc.getContext("2d")!;
        ctx.drawImage(original, 0, 0, oc.width, oc.height);
        const dataURL = oc.toDataURL("image/jpeg", 0.8);
        setImgSrc(dataURL);
        await predict(dataURL);
      };
      original.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  // ---- Sample image from /public ----
  const useSample = async () => {
    const sample = "/sample.jpg"; // add a file in /public named sample.jpg
    setImgSrc(sample);
    await predict(sample);
  };

  // ---- Ideas popup (battery safety special-cased) ----
  const showIdeas = () => {
    const classes = Array.from(new Set(preds.map((p) => p.class)));
    const ideas: string[] = [];
    classes.forEach((c) => {
      const list = IDEA_BANK[c] || [];
      ideas.push(...list.slice(0, 3));
    });

    if (classes.includes("battery")) {
      alert(
        "Detected battery – handle safely:\n• " +
          (IDEA_BANK.battery || []).join("\n• ") +
          (ideas.length
            ? "\n\nOther ideas:\n• " +
              ideas.filter((i) => !(IDEA_BANK.battery || []).includes(i)).join("\n• ")
            : "")
      );
      return;
    }

    alert(
      (ideas.length ? "Upcycle ideas:\n• " + ideas.join("\n• ") : "No specific ideas yet.") +
        (classes.length ? `\n\nMaterials detected: ${classes.join(", ")}` : "")
    );
  };

  // Live counts per class for a mini legend
  const counts = preds.reduce<Record<string, number>>((acc, p) => {
    acc[p.class] = (acc[p.class] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: 960, margin: "40px auto", padding: 16 }}>
      <h1>UpcycleHer – Material Detection Demo</h1>
      <p style={{ marginTop: -8 }}>
        Detects: <strong>cardboard</strong>, <strong>glass</strong>, <strong>metal</strong>,{" "}
        <strong>plastic</strong>, <strong>battery</strong>
      </p>

      <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
        <button onClick={() => setMode("upload")}>Upload</button>
        <button onClick={() => setMode("webcam")}>Webcam</button>
        <button
          onClick={() => {
            setMode("sample");
            useSample();
          }}
        >
          Sample
        </button>
        <button onClick={showIdeas} disabled={!preds.length}>
          Get Ideas
        </button>
      </div>

      {mode === "upload" && (
        <div style={{ marginBottom: 12 }}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onUpload(f);
            }}
          />
        </div>
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          border: "1px solid #e5e5e5",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {mode === "webcam" ? (
          <>
            <video ref={videoRef} style={{ width: "100%", display: "block" }} muted playsInline />
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
          </>
        ) : (
          <>
            {imgSrc && <img ref={imgRef} src={imgSrc} alt="preview" style={{ width: "100%", display: "block" }} />}
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
          </>
        )}
      </div>

      <div style={{ marginTop: 12 }}>
        {loading ? (
          <em>Detecting…</em>
        ) : preds.length ? (
          <>
            <strong>Detections</strong>
            <ul>
              {preds.map((p, i) => (
                <li key={i}>
                  {p.class} — {(p.confidence * 100).toFixed(1)}%{" "}
                  <small>
                    (x:{Math.round(p.x)}, y:{Math.round(p.y)}, w:{Math.round(p.width)}, h:{Math.round(p.height)})
                  </small>
                </li>
              ))}
            </ul>

            {Object.keys(counts).length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                {Object.entries(counts).map(([cls, n]) => (
                  <span
                    key={cls}
                    style={{
                      background: "#f3f3f3",
                      borderRadius: 12,
                      padding: "4px 10px",
                      fontSize: 12,
                    }}
                  >
                    {cls}: {n}
                  </span>
                ))}
              </div>
            )}
          </>
        ) : (
          <em>No detections yet.</em>
        )}
      </div>
    </div>
  );
}


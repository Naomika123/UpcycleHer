import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Star, ArrowRight, Users, Recycle, Gift, Sparkles, Leaf, Clock, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/95 backdrop-blur-lg sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-3xl shadow-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-4xl font-black text-foreground tracking-tight">UpcycleHer</span>
              <p className="text-sm text-muted-foreground font-semibold">Transform • Inspire • Sustain</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-bold text-lg">
              Discover
            </a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-bold text-lg">
              Projects
            </a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-bold text-lg">
              Community
            </a>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl shadow-primary/40 rounded-3xl px-8 py-4 font-black text-lg">
              <Camera className="h-6 w-6 mr-3" />
              Scan & Transform
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-40 px-6 bg-gradient-to-br from-background via-card/60 to-primary/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-accent/12 to-primary/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center max-w-7xl relative">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-8 py-4 rounded-full text-lg font-black mb-16 shadow-xl border border-primary/20">
            <Star className="h-6 w-6 text-accent fill-current" />
            Trusted by 100,000+ Creative Women Worldwide
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-foreground mb-12 leading-tight">
            Turn Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative">
              Trash
              <div className="absolute -bottom-6 left-0 right-0 h-3 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full"></div>
            </span>
            <br />
            Into Treasure
          </h1>

          <p className="text-3xl md:text-4xl text-muted-foreground mb-20 max-w-5xl mx-auto leading-relaxed font-semibold">
            Snap a photo of your household waste, and UpcycleHer gives you ready-to-go ideas in seconds. Transform your
            trash into beautiful home decor while helping the planet - it's that easy!
          </p>

          <div className="flex flex-col items-center gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl scale-150 opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full h-32 w-32 p-0 shadow-3xl shadow-primary/50 hover:scale-115 transition-all duration-700 group-hover:shadow-4xl"
              >
                <Camera className="h-16 w-16" />
              </Button>
            </div>
            <div className="text-center">
              <p className="text-2xl text-foreground font-black mb-3">Start Your Waste Transformation</p>
              <p className="text-xl text-muted-foreground font-semibold">
                Tap to scan your waste and discover endless possibilities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8">How It Works</h2>
            <p className="text-3xl text-muted-foreground max-w-4xl mx-auto font-semibold leading-relaxed">
              Skip the endless scrolling - get instant upcycling ideas in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            <div className="text-center group">
              <div className="relative mb-12">
                <div className="bg-gradient-to-br from-primary/25 to-accent/25 rounded-4xl w-36 h-36 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-700 shadow-2xl">
                  <Camera className="h-18 w-18 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-black shadow-xl">
                  1
                </div>
              </div>
              <h3 className="text-4xl font-black text-foreground mb-8">Scan Your Waste</h3>
              <p className="text-2xl text-muted-foreground leading-relaxed font-semibold">
                Simply point your camera at any household waste - old containers, broken furniture, worn clothes, or
                anything you're about to throw away
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-12">
                <div className="bg-gradient-to-br from-accent/25 to-primary/25 rounded-4xl w-36 h-36 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-700 shadow-2xl">
                  <Lightbulb className="h-18 w-18 text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-black shadow-xl">
                  2
                </div>
              </div>
              <h3 className="text-4xl font-black text-foreground mb-8">Get Upcycle Ideas</h3>
              <p className="text-2xl text-muted-foreground leading-relaxed font-semibold">
                Get instant, personalized projects to transform your waste into useful items - no more hours of
                Pinterest searching required!
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-12">
                <div className="bg-gradient-to-br from-primary/25 to-accent/25 rounded-4xl w-36 h-36 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-700 shadow-2xl">
                  <Sparkles className="h-18 w-18 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-black shadow-xl">
                  3
                </div>
              </div>
              <h3 className="text-4xl font-black text-foreground mb-8">Transform Your Trash</h3>
              <p className="text-2xl text-muted-foreground leading-relaxed font-semibold">
                Follow step-by-step tutorials to turn your waste into beautiful, functional pieces for your home
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8">Why Women Love UpcycleHer</h2>
            <p className="text-3xl text-muted-foreground max-w-4xl mx-auto font-semibold leading-relaxed">
              Save time, save money, and save the planet - all while making your home more beautiful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Card className="border-2 border-border/40 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-card/90 to-background backdrop-blur-sm group rounded-3xl">
              <CardHeader className="pb-8">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Recycle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-foreground text-3xl font-black">Reduce Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed font-semibold text-muted-foreground">
                  Give new life to household waste that would otherwise end up in landfills while creating something
                  useful for your home.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/40 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-card/90 to-background backdrop-blur-sm group rounded-3xl">
              <CardHeader className="pb-8">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Gift className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-foreground text-3xl font-black">Save Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed font-semibold text-muted-foreground">
                  Create beautiful home decor, storage solutions, and gifts without spending money on new items.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/40 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-card/90 to-background backdrop-blur-sm group rounded-3xl">
              <CardHeader className="pb-8">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-foreground text-3xl font-black">Save Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed font-semibold text-muted-foreground">
                  No more endless Pinterest scrolling - get instant, personalized upcycling ideas in seconds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/40 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-card/90 to-background backdrop-blur-sm group rounded-3xl">
              <CardHeader className="pb-8">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-foreground text-3xl font-black">Join Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xl leading-relaxed font-semibold text-muted-foreground">
                  Connect with like-minded women, share your transformations, and get inspired by others' projects.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-36 px-6 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center max-w-6xl relative">
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">Ready to Start Transforming?</h2>
          <p className="text-3xl mb-18 opacity-95 leading-relaxed max-w-5xl mx-auto font-semibold">
            Stop scrolling Pinterest for hours! Join over 100,000 women who are getting instant ideas to transform their
            household waste, saving money, and helping save the planet - all with just a quick photo.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/95 shadow-3xl shadow-black/40 rounded-3xl px-16 py-8 text-2xl font-black hover:scale-105 transition-all duration-700 group"
          >
            <Camera className="h-8 w-8 mr-5 group-hover:rotate-12 transition-transform" />
            Start Transforming Your Waste
            <ArrowRight className="h-8 w-8 ml-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-card/80 to-background border-t-2 border-border/40 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-xl">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="font-black text-foreground text-2xl">UpcycleHer</span>
                  <p className="text-sm text-muted-foreground font-bold">Transform • Inspire • Sustain</p>
                </div>
              </div>
              <p className="text-muted-foreground font-semibold text-lg leading-relaxed">
                Empowering women to reduce household waste, save money, and transform their homes through smart
                upcycling.
              </p>
            </div>
            <div>
              <h4 className="font-black text-foreground mb-6 text-lg">Discover</h4>
              <ul className="space-y-3 font-semibold text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Project Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Skill Levels
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-foreground mb-6 text-lg">Community</h4>
              <ul className="space-y-3 font-semibold text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Project Showcase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Upcycling Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-foreground mb-6 text-lg">Support</h4>
              <ul className="space-y-3 font-semibold text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-border/40 mt-16 pt-12 text-center font-bold text-muted-foreground text-lg">
            <p>&copy; 2024 UpcycleHer. All rights reserved. Made with 💚 for women who love to transform and reuse.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

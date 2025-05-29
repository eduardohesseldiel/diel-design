import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code, Palette, Command } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="z-0 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 lg:py-32 h-[900px]">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            v1.0
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Diel Design</span>
            <br />            
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            It covers both our brand and product design systems, and helps us create consistent, high-quality experiences for our users from button to billboard.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="px-8">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Code className="h-4 w-4 mr-2" />
              View Components
            </Button>
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Command className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">50+ Components</h3>
              <p className="text-sm text-muted-foreground text-center">
                Production-ready components built with accessibility in mind
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Design Tokens</h3>
              <p className="text-sm text-muted-foreground text-center">
                Working...
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <p className="text-sm text-muted-foreground text-center">
                Guidelines and patterns for building scalable interfaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
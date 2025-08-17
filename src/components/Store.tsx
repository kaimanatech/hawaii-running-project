import { ShoppingBag, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Store = () => {
  return (
    <section id="store" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-ocean mb-6">
            HRP Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thank you for supporting our club! Hawaii Running Project is a 501(c)(3) organization, 
            all proceeds from merchandise sales go directly to our organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* HRP Store */}
          <Card className="card-float p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ocean rounded-full flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
              HRP STORE
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Show your Hawaii Running Project pride with our official merchandise! 
              From comfortable running gear to stylish accessories, every purchase 
              supports our mission to build healthier communities across Hawaii.
            </p>

            <Button 
              size="lg" 
              className="btn-ocean text-lg px-8 py-4 inline-flex items-center space-x-2"
              onClick={() => window.open('https://runsignup.com/Club/Store/HI/Honolulu/HawaiiRunningProject', '_blank')}
            >
              <span>Visit HRP Online Store</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Card>

          {/* HKUR Store */}
          <Card className="card-float p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-sunset rounded-full flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
              HKUR STORE
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Did you know the Hawaii Kai Ultra Run now also has it's own merch store?
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Get exclusive Hawaii Kai Ultra Run merchandise to commemorate your 
              participation in one of Hawaii's most challenging and scenic running events!
            </p>

            <Button 
              size="lg" 
              className="btn-sunset text-lg px-8 py-4 inline-flex items-center space-x-2"
              onClick={() => window.open('https://runsignup.com/Race/Store/HI/Honolulu/HawaiiKaiUltraRunXTreme', '_blank')}
            >
              <span>Visit HKUR Online Store</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Card>
        </div>

        {/* Support Message */}
        <div className="text-center">
          <Card className="card-float p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-display font-bold text-foreground">
                Supporting Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Every purchase from our stores directly supports Hawaii Running Project's programs, 
              training sessions, community events, and our mission to improve health and wellness 
              throughout the Hawaiian Islands. Thank you for being part of our ohana!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Store; 
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Donate = () => {
  return (
    <section id="donate" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-gray-800 mb-8">
            Donate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you would like to make a donation to Hawaii Running Project, please click on the link below:
          </p>
          
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 text-lg px-12 py-4 rounded-full inline-flex items-center space-x-2"
              onClick={() => window.open('https://runsignup.com/Club/Donate/HI/Honolulu/HawaiiRunningProject', '_blank')}
            >
              <span className="underline">DONATE HERE</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* RRCA Information */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* RRCA Content */}
          <div>
            <Card className="card-float p-8">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Hawaii Running Project (HRP) is officially a member of the Road Runners Club of America (RRCA). 
                The RRCA is the oldest and largest national association of runners and running organizations 
                dedicated to growing the sport of running since 1958. The RRCA mission is to champion the 
                development and success of community-based running organizations that empower all people to 
                participate in the sport of running in pursuit of enjoyment, health, well-being and competition.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a member of RRCA, HRP gains access to some important benefits, one of which is the 
                501(c)(3) nonprofit group tax-exempt status with the IRS through the Road Runners Club of America. 
                This means that <strong>donations to HRP are now tax-deductible</strong> and 100% of it goes towards 
                funding activities to benefit HRP members and the running community.
              </p>
              
              <div className="mt-6 flex items-center space-x-2 text-sm text-accent font-medium">
                <Heart className="h-4 w-4" />
                <span>Tax-Deductible • 100% Community Benefit</span>
              </div>
            </Card>
          </div>

          {/* RRCA Logo */}
          <div className="text-center">
            <div className="inline-block bg-black rounded-lg p-8">
              <div className="bg-black text-center">
                <div className="text-6xl font-bold text-blue-300 mb-2">RRCA</div>
                <div className="text-2xl font-bold text-yellow-400 mb-4">MEMBER</div>
                <div className="relative">
                  <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto">
                    {/* Triangle outline */}
                    <path 
                      d="M100 20 L180 180 L20 180 Z" 
                      fill="none" 
                      stroke="#4A5568" 
                      strokeWidth="4"
                    />
                    {/* Runners silhouettes */}
                    <g fill="#4A5568">
                      {/* Runner 1 */}
                      <ellipse cx="85" cy="140" rx="8" ry="4" />
                      <path d="M85 135 L90 120 L85 110 L82 115 L80 125 Z" />
                      <circle cx="85" cy="105" r="6" />
                      <path d="M75 130 L80 125 L85 135 L90 140" fill="none" stroke="#4A5568" strokeWidth="2" />
                      <path d="M90 130 L95 135 L85 145 L80 140" fill="none" stroke="#4A5568" strokeWidth="2" />
                      
                      {/* Runner 2 */}
                      <ellipse cx="115" cy="140" rx="8" ry="4" />
                      <path d="M115 135 L110 120 L115 110 L118 115 L120 125 Z" />
                      <circle cx="115" cy="105" r="6" />
                      <path d="M125 130 L120 125 L115 135 L110 140" fill="none" stroke="#4A5568" strokeWidth="2" />
                      <path d="M110 130 L105 135 L115 145 L120 140" fill="none" stroke="#4A5568" strokeWidth="2" />
                    </g>
                    {/* Registered trademark */}
                    <text x="170" y="175" fontSize="12" fill="#4A5568">®</text>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Proud member of the Road Runners Club of America
            </p>
          </div>
        </div>

        {/* Additional Support Info */}
        <div className="mt-16 text-center">
          <Card className="card-float p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
              Your Support Makes a Difference
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Every donation helps fund training sessions, events, coaching resources, and community programs 
              that make running accessible to everyone in Hawaii. Join us in building a healthier, more 
              connected community through the power of running.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Donate; 
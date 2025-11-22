import { ExternalLink, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  const sponsors = [
    {
      name: "HOKA STORE – ALA MOANA",
      description: "Get Free Shipping & Free Extended 60 Day returns plus Exclusive Access to Events.",
      buttonText: "Click to join today",
      image: "/hoka.png",
      membershipImage: "/hoka-membership.png",
      link: "#", // You can update this with the actual HOKA link
      gradient: "bg-gradient-ocean"
    },
    {
      name: "Queen Kapiolani Hotel – Waikiki",
      description: "Experience authentic Hawaiian hospitality in the heart of Waikiki with special packages for our running community.",
      buttonText: "View Packages",
      image: "/queen-kapiolani-hotel.png",
      link: "https://www.queenkapiolani.com/packages.htm",
      gradient: "bg-gradient-sunset"
    }
  ];

  return (
    <section id="sponsors" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-sunset mb-6">
            Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Hawaii Running Project is sponsored by
          </p>
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Award className="h-6 w-6" />
            <span className="text-lg font-semibold">Our Valued Partners</span>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {sponsors.map((sponsor, index) => (
            <Card key={sponsor.name} className="card-float p-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Sponsor Image Header */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {sponsor.name}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {sponsor.description}
                </p>

                {/* HOKA Membership Image */}
                {sponsor.membershipImage && (
                  <div className="mb-6">
                    <img 
                      src={sponsor.membershipImage} 
                      alt="HOKA Membership Benefits" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                <Button 
                  size="lg" 
                  className={`${sponsor.gradient} text-white text-lg px-8 py-4 inline-flex items-center space-x-2 w-full justify-center`}
                  onClick={() => window.open(sponsor.link, '_blank')}
                >
                  <span>{sponsor.buttonText}</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="text-center">
          <Card className="card-float p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-display font-bold text-foreground">
                Partnership Benefits
              </h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Our sponsors provide exclusive benefits, special discounts, and unique experiences for Hawaii Running Project members. 
              These partnerships help us deliver exceptional value while supporting our mission to build healthier communities across Hawaii.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Exclusive Discounts</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">Special Access</p>
              </div>
              <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <ExternalLink className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Premium Services</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors; 
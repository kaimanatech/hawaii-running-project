import { ArrowRight, CheckCircle, Users, Clock, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const JoinUs = () => {
  const benefits = [
    "Free weekly group runs and training sessions",
    "Access to exclusive community events and races",
    "Professional coaching and fitness guidance",
    "Nutrition workshops and wellness education",
    "Supportive community of like-minded individuals",
    "Beautiful running routes across Hawaiian islands"
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Complete our simple registration form and tell us about your fitness goals."
    },
    {
      number: "02", 
      title: "Join a Session",
      description: "Attend your first group run - we'll help you find the perfect pace and group."
    },
    {
      number: "03",
      title: "Build Connections",
      description: "Meet fellow runners, make friends, and become part of our ohana (family)."
    },
    {
      number: "04",
      title: "Grow Together",
      description: "Achieve your fitness goals while contributing to Hawaii's health revolution."
    }
  ];

  return (
    <section id="join" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-sunset mb-6">
            Join Our Ohana
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Become part of Hawaii's most supportive running community. Whether you're a beginner 
            taking your first steps or an experienced runner looking for new challenges, you belong here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-display font-semibold mb-8 text-foreground">
              What You'll Get
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 card-float bg-gradient-to-r from-secondary/10 to-primary/10">
              <h4 className="font-display font-semibold text-lg mb-3 text-foreground">
                Special Welcome Package
              </h4>
              <p className="text-muted-foreground mb-4">
                New members receive a welcome kit including our community t-shirt, 
                running tips guide, and a personalized training plan.
              </p>
              <div className="flex items-center space-x-2 text-sm text-accent font-medium">
                <Heart className="h-4 w-4" />
                <span>Valued at $75 - Yours FREE!</span>
              </div>
            </div>
          </div>

          {/* How to Join Steps */}
          <div>
            <h3 className="text-3xl font-display font-semibold mb-8 text-foreground">
              How to Get Started
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-ocean text-white flex items-center justify-center font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-float p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-background to-secondary/5">
            <h3 className="text-3xl font-display font-bold mb-4 text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of Hawaii residents who have already transformed their lives through our community. 
              Your healthiest, happiest self is waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="btn-sunset text-lg px-8 py-4">
                Join Our Community Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Attend a Free Session First
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">500+ Active Members</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">5 Sessions Per Week</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Multiple Locations</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
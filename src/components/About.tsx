import { Heart, Target, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Promoting physical and mental well-being through active lifestyle and community support."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Welcoming runners of all levels, from beginners to experienced athletes, in a supportive environment."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Helping members reach their fitness goals through structured programs and personal coaching."
    },
    {
      icon: Award,
      title: "Island Pride",
      description: "Celebrating Hawaiian culture and natural beauty while promoting healthy living across the islands."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-ocean mb-6">
            About Aloha Trail Collective
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An ambitious community-driven project dedicated to solving Hawaii's health challenges 
            through accessible running programs, nutrition education, and strong community bonds.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card-float p-8">
            <h3 className="text-2xl font-display font-semibold text-gradient-island mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To improve the overall health in the State of Hawaii and reduce obesity among its residents 
              by creating running programs that are available to everyone in Hawaii. We believe that 
              through community, support, and accessible fitness programs, we can create lasting positive change.
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-2xl font-display font-semibold text-gradient-island mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To implement a variety of community service running programs that meet the health and 
              wellness needs of all residents, including specialized programs for schools, corporations, 
              and underserved communities throughout the Hawaiian Islands.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="card-float p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Community Impact */}
        <div className="mt-16 text-center">
          <div className="card-float p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
              Making a Real Impact
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Lives Changed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Community Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">12</div>
                <div className="text-muted-foreground">Annual Events</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Island Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
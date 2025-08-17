import { Calendar, MapPin, Trophy, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunrise Beach 5K",
      date: "March 15, 2024",
      time: "6:30 AM",
      location: "Waikiki Beach, Oahu",
      participants: 150,
      type: "5K Race",
      description: "Start your day with a beautiful sunrise run along Waikiki Beach. Perfect for all skill levels.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Trail Adventure Challenge",
      date: "March 22, 2024",
      time: "7:00 AM",
      location: "Diamond Head Trail, Oahu",
      participants: 85,
      type: "Trail Run",
      description: "Challenge yourself with this scenic trail run featuring stunning island views.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Community Wellness Fair",
      date: "April 5, 2024",
      time: "9:00 AM",
      location: "Kapiolani Park, Oahu",
      participants: 300,
      type: "Community Event",
      description: "A day of fitness activities, health screenings, and community connections.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const pastEvents = [
    { title: "Island Marathon", participants: 450, date: "Feb 2024" },
    { title: "Charity Fun Run", participants: 200, date: "Jan 2024" },
    { title: "New Year Beach Run", participants: 180, date: "Jan 2024" }
  ];

  return (
    <section id="events" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-ocean mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for exciting races, community gatherings, and wellness events throughout the year. 
            Connect with fellow runners and celebrate our shared passion for health and fitness.
          </p>
        </div>

        {/* Featured Event */}
        {upcomingEvents.filter(event => event.featured).map((event) => (
          <div key={event.id} className="card-float p-0 mb-12 overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Featured Event
                  </Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-4 text-primary border-primary">
                    {event.type}
                  </Badge>
                  <h3 className="text-3xl font-display font-bold mb-4 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{event.date}</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div className="text-foreground">{event.location}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div className="text-foreground">{event.participants} participants</div>
                  </div>
                </div>

                <Button size="lg" className="btn-sunset w-full sm:w-auto">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Other Upcoming Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.filter(event => !event.featured).map((event) => (
            <Card key={event.id} className="card-float p-0 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {event.type}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {event.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span className="text-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-foreground">{event.participants} registered</span>
                  </div>
                </div>

                <Button className="btn-ocean w-full">
                  Learn More & Register
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Past Events Success */}
        <div className="card-float p-8 text-center">
          <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Recent Event Highlights
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                <p className="text-lg font-bold text-primary">{event.participants} participants</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

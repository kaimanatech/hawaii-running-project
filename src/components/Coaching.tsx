import { User, Stethoscope, ExternalLink, Target, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Coaching = () => {
  return (
    <section id="coaching" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-ocean mb-6">
            Coaching and PT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take your running to the next level with personalized coaching and professional physical therapy services 
            from Hawaii Running Project's trusted partners.
          </p>
        </div>

        <div className="space-y-20">
          {/* Run Akamai Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="card-float p-0 order-2 lg:order-1 overflow-hidden">
              {/* Run Akamai Header Image */}
              <div className="h-32 bg-gradient-ocean relative overflow-hidden">
                <img 
                  src="/run-akamai.png" 
                  alt="Run Akamai Coaching" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-ocean/70 flex items-center">
                  <div className="flex items-center ml-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white">
                        Run Akamai
                      </h3>
                      <p className="text-lg text-white/90">Personal Run Coaching</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">

              <div className="mb-8">
                <h4 className="text-xl font-display font-semibold text-primary mb-4">
                  Coach Naomi Morita
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Other coaches tell you WHAT to do; I work with each runner to figure out their unique and personal HOW, 
                  whether its proper form, more speed/distance or injury prevention.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Maybe your goal is quality time with your friends, savoring the beauty of nature, restoring peace and balance 
                  or exploring your athletic potential (or some combination of these)…running enhances in different ways as we 
                  journey through life. My job is to help you find the fun, beauty and power in this sport, and to meet you 
                  wherever you are on that path.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-display font-semibold text-primary mb-4">
                  Individualized Training
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My goal for each of our sessions together is for you to take away a new feeling or skill. You will know how 
                  BETTER feels, how to make your body execute it, and how to recognize when you're NOT doing it.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All coaching plans include a dynamic race-prep plan to structure your running to prepare for a particular race 
                  or distance, as well as unlimited access via text or email.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                  Ready to take the next steps towards your running goals?
                </p>
              </div>

                              <Button 
                  size="lg" 
                  className="btn-ocean text-lg px-8 py-4 inline-flex items-center space-x-2"
                  onClick={() => window.open('https://runakamai.com', '_blank')}
                >
                  <span>Learn More at RunAkamai.com</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Coach Image */}
            <div className="order-1 lg:order-2">
              <Card className="card-float p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src="/coach-naomi.png" 
                    alt="Coach Naomi Morita" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                  Coach Naomi Morita
                </h4>
                <p className="text-muted-foreground mb-4">HRP Training/Coaching Leader</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Goal<br/>Achievement</p>
                  </div>
                  <div>
                    <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Injury<br/>Prevention</p>
                  </div>
                  <div>
                    <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Form<br/>Improvement</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Enphysio Health Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* PT Image Placeholder */}
            <div>
              <Card className="card-float p-8 text-center bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20">
                  <img 
                    src="/dr-tanner.png" 
                    alt="Dr. Tanner Crass" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                  Dr. Tanner Crass
                </h4>
                <p className="text-muted-foreground mb-4">PT, DPT, CSCS, FAFS</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">2025</div>
                    <p className="text-sm text-muted-foreground">HRP Vice-Chair</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">2016</div>
                    <p className="text-sm text-muted-foreground">Columbia University DPT</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="card-float p-0 overflow-hidden">
              {/* Enphysio Health Header Image */}
              <div className="h-32 bg-gradient-sunset relative overflow-hidden">
                <img 
                  src="/enphysio-health.png" 
                  alt="Enphysio Health Office" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-sunset/70 flex items-center">
                  <div className="flex items-center ml-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Stethoscope className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white">
                        Enphysio Health
                      </h3>
                      <p className="text-lg text-white/90">Physical Therapy</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">

              <div className="mb-8">
                <h4 className="text-xl font-display font-semibold text-secondary mb-4">
                  Dr. Tanner Crass PT, DPT, CSCS, FAFS
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tanner is not only the 2025 HRP Board Vice-Chair, he's also one of the islands best physical therapists 
                  and speedy island runners as well! Many HRP runners have seen Tanner for their aches and ailments and come 
                  back to better health and running form because of it!
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tanner received his Doctorate in Physical Therapy from Columbia University in 2016. From there he quickly 
                  worked to become a Certified Strength and Conditioning Specialist. He is passionate about helping people move 
                  and feel better and has worked in a variety of settings including: orthopedics, sports, vestibular (dizziness), 
                  and geriatrics.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  He specializes in Manual Therapy as well as the use of Applied Functional Science to get his patients moving again. 
                  Outside of the clinic he is not just an avid runner, but also a golfer, weightlifter and proud new father.
                                </p>
              </div>

              <Button 
                size="lg" 
                className="btn-sunset text-lg px-8 py-4 inline-flex items-center space-x-2"
                onClick={() => window.open('https://enphysiohealth.com', '_blank')}
              >
                <span>Learn More at EnphysioHealth.com</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="card-float p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
              Elevate Your Running Journey
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you need personalized coaching to reach your goals or physical therapy to overcome injuries, 
              our trusted partners provide the expertise and care to help you become the best runner you can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-ocean text-lg px-8 py-4"
                onClick={() => window.open('https://runakamai.com', '_blank')}
              >
                Explore Coaching Services
              </Button>
              <Button 
                size="lg" 
                className="btn-sunset text-lg px-8 py-4"
                onClick={() => window.open('https://enphysiohealth.com', '_blank')}
              >
                Learn About Physical Therapy
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Coaching; 
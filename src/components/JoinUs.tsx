import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const JoinUs = () => {
  const membershipTiers = [
    {
      name: "Pathfinder",
      price: "FREE*",
      priceNote: "We kindly ask that you volunteer at two of our numerous races/events",
      benefits: [
        "Unlimited workouts",
        "Access to coaching",
        "Connect with a welcoming community of runners"
      ],
      buttonText: "Start your journey!",
      buttonClass: "bg-white text-green-800 hover:bg-gray-100",
      cardClass: "bg-green-700 text-white"
    },
    {
      name: "Pace Setter",
      price: "$30",
      benefits: [
        "All in Pathfinder +",
        "HRP T-shirt",
        "1/2 off Hawaii Kai Ultra"
      ],
      buttonText: "Pick up speed!",
      buttonClass: "bg-white text-green-800 hover:bg-gray-100",
      cardClass: "bg-green-700 text-white"
    },
    {
      name: "Shaka Sprinter", 
      price: "$100",
      benefits: [
        "All in Pace Setter +",
        "Champion our mission",
        "Half off Annual Banquet"
      ],
      buttonText: "Lead the pack!",
      buttonClass: "bg-white text-green-800 hover:bg-gray-100",
      cardClass: "bg-green-700 text-white"
    }
  ];

  return (
    <section id="join" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-gray-800 mb-4">
            Join us today!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All memberships includes our required liability waiver.
          </p>
        </div>

        {/* Membership Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://hawaiirunningproject.wordpress.com/wp-content/uploads/2025/01/cropped-cropped-hrp-transparent.png" 
              alt="Hawaii Running Project Logo" 
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Get set, Go! Become a member
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Your membership funds training, events, coaching, and community perks
              </p>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <Card key={tier.name} className={`${tier.cardClass} p-8 rounded-2xl shadow-lg relative overflow-hidden`}>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">
                  {tier.name}
                </h4>
                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {tier.price}
                  </div>
                  {tier.priceNote && (
                    <p className="text-sm opacity-90 max-w-xs mx-auto">
                      {tier.priceNote}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-left">{benefit}</span>
                    </div>
                  ))}
                </div>

                                 <Button 
                   className={`${tier.buttonClass} w-full py-3 font-semibold rounded-full flex items-center justify-center space-x-2`}
                   onClick={() => window.open('https://runsignup.com/Club/HI/Honolulu/HawaiiRunningProject', '_blank')}
                 >
                   <span>{tier.buttonText}</span>
                   <ArrowRight className="h-4 w-4" />
                 </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Membership Form Section */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-8">
            Membership Form & Waiver
          </h3>
                     <Button 
             size="lg" 
             className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-12 py-4 rounded-full"
             onClick={() => window.open('https://runsignup.com/Club/HI/Honolulu/HawaiiRunningProject', '_blank')}
           >
             <span className="underline">SIGN UP HERE</span>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
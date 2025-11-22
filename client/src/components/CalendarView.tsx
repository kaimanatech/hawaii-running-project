import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface WorkoutEvent {
  day: string;
  time: string;
  title: string;
  location: string;
}

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Map workout days to their schedule
  const workoutSchedule: Record<string, WorkoutEvent[]> = {
    Tuesday: [
      {
        day: "Tuesday",
        time: "6 PM",
        title: "T.N.T (Tuesday Night Training)",
        location: "Magic Island/Ala Moana Beach Park"
      }
    ],
    Thursday: [
      {
        day: "Thursday",
        time: "6 PM",
        title: "HOKA Run Club",
        location: "HOKA Ala Moana"
      }
    ],
    Friday: [
      {
        day: "Friday",
        time: "6 PM",
        title: "Friday Night Fireworks Potluck",
        location: "Magic Island at Ala Moana Beach Park"
      }
    ],
    Saturday: [
      {
        day: "Saturday",
        time: "7 AM",
        title: "QK Run Club",
        location: "Queen Kapiolani Hotel, 150 Kapahulu Ave"
      }
    ],
    Sunday: [
      {
        day: "Sunday",
        time: "6 AM",
        title: '"Sunday Runday" Long Run with HOKA',
        location: "HOKA Ala Moana (regular spot)"
      }
    ]
  };

  const getEventsForDate = (date: Date) => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    return workoutSchedule[dayName] || [];
  };

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];
  const dayName = selectedDate?.toLocaleDateString('en-US', { weekday: 'long' });

  const colorMap: Record<string, string> = {
    'Tuesday': 'bg-orange-500',
    'Thursday': 'bg-blue-500',
    'Friday': 'bg-purple-500',
    'Saturday': 'bg-green-700',
    'Sunday': 'bg-yellow-500'
  };

  const iconMap: Record<string, string> = {
    'Tuesday': '🔥',
    'Thursday': '🏃‍♀️',
    'Friday': '🎆',
    'Saturday': '🏨',
    'Sunday': '☀️'
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gradient-ocean mb-12 text-center">
          Calendar View
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="md:col-span-1">
            <Card className="card-float p-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="w-full"
              />
            </Card>
          </div>

          {/* Events for selected date */}
          <div className="md:col-span-2">
            <Card className="card-float p-6">
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                {selectedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>

              {selectedEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`${colorMap[event.day] || 'bg-primary'} rounded-lg p-4 text-white`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold">{event.title}</h4>
                          <div className="flex items-center gap-2 mt-2 text-sm opacity-90">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <span className="text-3xl">{iconMap[event.day] || '🏃'}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-3 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-2">No workouts scheduled</p>
                  <p className="text-sm text-muted-foreground">
                    Workouts are on Tuesday, Thursday, Friday, Saturday, and Sunday
                  </p>
                </div>
              )}

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3">Weekly Schedule</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(workoutSchedule).map(([day, events]) => (
                    <Badge
                      key={day}
                      className={`${colorMap[day] || 'bg-primary'} text-white justify-center`}
                    >
                      {day}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarView;

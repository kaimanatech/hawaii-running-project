import WorkoutSchedule from "@/components/WorkoutSchedule";
import CalendarView from "@/components/CalendarView";

const SchedulePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <CalendarView />
      <WorkoutSchedule />
    </div>
  );
};

export default SchedulePage; 
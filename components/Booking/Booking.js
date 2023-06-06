import { useState } from "react";
import SelectPlan from "./SelectPlan/SelectPlan";
import SelectTime from "./SelectTime/SelectTime";
import Checkout from "./Checkout/Checkout";

const Booking = ({ tutors, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    handleNextStep();
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    handleNextStep();
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation and payment logic
    onClose();
  };

  const pricing = tutors.map((tutor) => tutor.hourly_rate);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SelectPlan onSelect={handlePlanSelect} pricing={pricing} />;
      case 2:
        return <SelectTime onSelect={handleTimeSelect} />;
      case 3:
        return (
          <Checkout
            plan={selectedPlan}
            time={selectedTime}
            tutorName={tutors[0].name} // Access the name of the first tutor in the array
            onConfirm={handleConfirmBooking}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Booking;

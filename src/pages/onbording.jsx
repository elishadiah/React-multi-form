import React from "react";
import { useSelector } from "react-redux";
import OnbordingForm from "../components/onbordingForm";

const OnbordingPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <>
      <OnbordingForm currentUser={currentUser} />
    </>
  );
};

export default OnbordingPage;
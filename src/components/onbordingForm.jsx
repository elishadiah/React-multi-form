import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import onbordingFormStyle from "./onbordingForm.style";
import OnbordingStart from "./onbordingSteps/onbordingStart";

const useOnboardingFormStyle = makeStyles(onbordingFormStyle);
const OnbordingForm = ({ currentUser }) => {
  const classes = useOnboardingFormStyle();
  const [step, setStep] = useState(1);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.signupFormContainer}
    >
      {step === 0 && (
        <OnbordingStart currentUser={currentUser} setStep={setStep} />
      )}
      {step === 1 && <OnbordingStart setStep={setStep} />}
      {step === 2 && <OnbordingStart setStep={setStep} />}
      {step === 3 && <OnbordingStart setStep={setStep} />}
    </Grid>
  );
};

export default OnbordingForm;

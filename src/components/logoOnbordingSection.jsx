import React from "react";
import { Grid } from "@material-ui/core";
import OnbordingLogo from "../assets/images/onboarding.png";

const LogoOnbordingSection = () => {
  return (
    <Grid className="flex bg-[#0e0e0e] p-4 h-screen items-center">
      <img
        src={OnbordingLogo}
        alt="logo"
        width={"100%"}
        className=""
      />
    </Grid>
  );
};

export default LogoOnbordingSection;

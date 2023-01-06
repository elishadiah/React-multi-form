import React from "react";
import { Grid } from "@material-ui/core";
import ProgressLogo from "../assets/images/loader.png";

const LogoProgressSection = () => {
  return (
    <Grid className="flex bg-[#0e0e0e] p-4 h-screen items-center">
      <img
        src={ProgressLogo}
        alt="logo"
        width={"100%"}
        className=""
      />
    </Grid>
  );
};

export default LogoProgressSection;

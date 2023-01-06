import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import LogoOnbordingSection from "../logoOnbordingSection";
import Logo from "../../assets/images/logo1.png";
import CustomTextField from "../customTextField";


const OnbordingStart = ({ setStep }) => {
  const [invitationLink, setInvitationLink] = useState(
    "https://invitation.com"
  );
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  const formik = useFormik({
    initialValues: {
      legalEntity: "",
      companyName: "",
    },
    validationSchema: Yup.object({
      legalEntity: Yup.string().required("Required"),
      companyName: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const onbordingData = {
        name: values.companyName,
        type: values.legalEntity,
      };
      dispatch({
        type: ONBORDING_INFO,
        payload: onbordingData,
      });
    },
  });
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={5}>
          <LogoOnbordingSection />
        </Grid>
        <Grid
          item
          xs={7}
          className="flex-col items-center justify-center px-40"
        >
          <Grid className="flex p-4 items-center justify-center">
            <img src={Logo} alt="logo" />
          </Grid>
          <Typography variant="h3" className="text-center pt-8 pb-2">
            Google MCM Onboarding
          </Typography>
          <Typography variant="h4" className="pb-16">
            Start your onboarding faster by filling this quick form and let's
            improve your earnings!
          </Typography>
          <Typography variant="h5">
            Tell us which legal entity you are:
          </Typography>
          <Grid>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="individual"
              name="radio-buttons-group"
              className="flex flex-row justify-center"
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individual"
                className="border border-indigo-600 w-32"
              />
              <FormControlLabel
                value="company"
                control={<Radio />}
                label="Company"
                className="border border-indigo-600 w-32"
              />
              <FormControlLabel
                value="reseller"
                control={<Radio />}
                label="Reseller"
                className="border border-indigo-600 w-32"
              />
            </RadioGroup>
          </Grid>
          <Typography variant="h5">Name or company name</Typography>
          <CustomTextField
            label="Name or Company Name"
            name="name"
            type="text"
          />
          <Typography variant="h5">Your invitation code:</Typography>
          <Grid container direction="column" className="pt-4 pb-8">
            <input
              type="text"
              className="bg-[#858b94] h-16 rounded px-8 text-xl text-white"
              value={invitationLink}
            />
          </Grid>
          <Grid className="flex justify-end">
            <Button variant="contained" color="primary" size="large" className="w-48">
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OnbordingStart;

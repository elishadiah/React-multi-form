import React, { useState, useRef, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Typography, Box, Radio, RadioGroup } from "@material-ui/core";
import { Button, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import LogoOnbordingSection from "../logoOnbordingSection";
import Logo from "../../assets/images/logo1.png";
import Home from "../../assets/images/home.png";
import Company from "../../assets/images/building.png";
import Reseller from "../../assets/images/launch.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReactLoading from "react-loading";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
});

const OnbordingStart = ({ setStep }) => {
  const [invitationLink, setInvitationLink] = useState(
    "https://invitation.com"
  );
  const [radioValue, setRadioValue] = useState("individual");

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  const formik = useFormik({
    initialValues: {
      companyName: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required *"),
    }),
    onSubmit: (values) => {
      const onbordingData = {
        name: values.companyName,
        type: radioValue,
      };
      dispatch({
        type: ONBORDING_INFO,
        payload: onbordingData,
      });
    },
  });

  const formControlStyle = "flex border-2 border-[#e9e9e9] w-40 rounded-lg";
  const formControlActStyle = "flex border-2 border-indigo-600 w-40 rounded-lg";
  const validationStyle = "text-red-400";
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="individual"
              name="radio-buttons-group"
              value={radioValue}
              onChange={handleRadioChange}
              row
              className="flex flex-row justify-between py-4"
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label={
                  <Fragment>
                    <Box className="flex items-center">
                      <img src={Home} alt="home" className="w-6 mr-2" />
                      Individual
                    </Box>
                  </Fragment>
                }
                className={
                  radioValue == "individual"
                    ? formControlActStyle
                    : formControlStyle
                }
              />
              <FormControlLabel
                value="company"
                control={<Radio />}
                label={
                  <Fragment>
                    <Box className="flex items-center">
                      <img src={Company} alt="home" className="w-6 mr-2" />
                      Company
                    </Box>
                  </Fragment>
                }
                className={
                  radioValue == "company"
                    ? formControlActStyle
                    : formControlStyle
                }
              />
              <FormControlLabel
                value="reseller"
                control={<Radio />}
                label={
                  <Fragment>
                    <Box className="flex items-center">
                      <img src={Reseller} alt="home" className="w-6 mr-2" />
                      Reseller
                    </Box>
                  </Fragment>
                }
                className={
                  radioValue == "reseller"
                    ? formControlActStyle
                    : formControlStyle
                }
              />
            </RadioGroup>
            <Typography variant="h5">Name or company name</Typography>
            <Grid container direction="column" className="py-4">
              <input
                type="text"
                name="companyName"
                className="bg-[#d9e6ec] h-16 rounded px-8 text-xl"
                value={formik.values.companyName}
                onChange={formik.handleChange}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <Typography variant="body1" className={validationStyle}>
                  {formik.errors.companyName}
                </Typography>
              ) : null}
            </Grid>
            <Typography variant="h5">Your invitation code:</Typography>
            <Grid container direction="column" className="pt-4 pb-8">
              <input
                type="text"
                className="bg-[#858b94] h-16 rounded px-8 text-xl text-white"
                value={invitationLink}
                readOnly
              />
            </Grid>
            <Grid className="flex justify-end">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="w-48"
                onClick={() => formik.handleSubmit()}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default OnbordingStart;

import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Box, Button, ListItem } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const OnbordingStart = ({ setStep }) => {
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
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <ListItem>xs = 5</ListItem>
        </Grid>
        <Grid item xs={7}>
          <ListItem>xs = 7</ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OnbordingStart;

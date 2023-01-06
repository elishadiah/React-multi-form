import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

const CustomTextField = ({
  label,
  value,
  setValue,
  type,
  required,
  name,
  onKeyDown,
  defaultValue,
}) => {
  return (
    <Grid container direction="column" className="py-4">
      <input
        type={type}
        className="bg-[#d9e6ec] h-16 rounded px-8 text-xl"
        value={value}
        name={name}
        onChange={setValue}
        defaultValue={defaultValue}
        onFocus={() => {
          setLabelFloat("translate(0, -12px) scale(0.75)");
          setBorderColor("#B7BBD8");
        }}
        onBlur={() => {
          setLabelFloat("");
          setBorderColor("#E4E6F2");
        }}
        onKeyDown={onKeyDown}
        required={required}
      />
      {/* 
      <Typography variant="body1" className="">
        {label}
      </Typography> */}
    </Grid>
  );
};

export default CustomTextField;

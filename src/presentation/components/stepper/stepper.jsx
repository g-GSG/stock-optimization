/* eslint-disable react/destructuring-assignment */
import { StepLabel } from "@mui/material";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import React from "react";

const StepProgress = ({ activeStep, steps }) => {
  return (
    <div>
      <Stepper
        activeStep={activeStep}
        sx={{
          width: 300,
          "& .MuiStepIcon-root": {
            color: "#9F86C0",
          },
          "& .Mui-active": {
            color: "#E0B1CB",
          },
          "& .MuiStepIcon-text": {
            display: "none",
          },
        }}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepIcon-active": {
                color: "#E0B1CB",
              },
            }}
            alternativeLabel
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepProgress;

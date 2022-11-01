import React from "react";
import { StepConnector } from "@mui/material";
import { StepLabel } from "@mui/material";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";

const StepProgress = ({ activeStep, steps }) => {
  return (
    <div>
      <Stepper
        connector={<StepConnector />}
        activeStep={activeStep}
        alternativeLabel
        sx={{
          width: 350,
          "& .MuiStepIcon-root": {
            color: "#9F86C0",
            "&.Mui-active": {
              color: "#E0B1CB"
            },
            "&.Mui-completed": {
              color: "#9F86C0"
            },
            "& .MuiStepIcon-text": {
              display: 'none'
            }
          }
        }}
      >
        {steps.map((label, index) => (
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

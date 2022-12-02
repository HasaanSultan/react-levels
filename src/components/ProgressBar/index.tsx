import React from "react";
import { CustomProgressBar } from "./progressBar.style";
import { ProgressProps } from "rc-progress/es/interface";

export interface progressProps extends ProgressProps {
  disabled?: boolean;
}

const ProgressBar: React.FC<progressProps> = (props) => {
  const { disabled } = props;
  return (
    <CustomProgressBar {...props} className={disabled ? "disabled" : ""} />
  );
};

export default ProgressBar;

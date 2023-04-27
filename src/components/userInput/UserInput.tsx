import React from "react";

import { StyledLabel, StyledInput, ErrorMessage } from "./UserInputStyled";

type Props = {
  label: string;
  name: string;
  register: any;
  type?: string;
  optional?: boolean;
  minLength?: number;
  errors?: any;
  pattern?: RegExp;
  mess?: string; 
};

const UserInput = ({
  label,
  name,
  register,
  type,
  optional = true,
  minLength,
  errors,
  pattern, 
  mess
}: Props) => (
  <>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput
      id={name}
      {...register(name, {
        required: optional,
        minLength,
        pattern: {
          value: pattern,  
          message: mess, 
        }, 
      })}
      type={type || "text"}
    />

    {errors && (
      <ErrorMessage>
        {errors[name]?.type === "required" && `${label} is required`}
        {errors[name]?.type === "minLength" &&
          `${label} must be at least ${minLength} characters`}
        {errors[name]?.type === "pattern" && errors[name].message}
      </ErrorMessage>
    )}
  </>
);

export default UserInput;

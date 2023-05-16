import React from "react";
import { useFormContext } from "react-hook-form";

import { StyledLabel, StyledInput, ErrorMessage } from "./UserInputStyled";

type Props = {
  label: string;
  name: string;
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
  type,
  optional = true,
  minLength,
  errors,
  pattern, 
  mess
}: Props) => { // jag ändrade så att vi har en funktion med mer att definera än enbart vad som returneras. () => true är detsamma som () => { return true; }
  const { register } = useFormContext(); // Eftersom vi gör mer än enbart returnerar något, så kan vi definera register här istället genom props

  return (
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
};

export default UserInput;

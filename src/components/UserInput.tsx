import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: black;
`;

const StyledInput = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 2px solid #686262;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: large;
`;

type Props = {
  label: string;
  name: string;
  register: any;
  type?: string;
  optional?: boolean;
  minLength?: number;
  errors?: any;
  pattern?: string;
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
}: Props) => (
  <>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput
      id={name}
      {...register(name, {
        required: optional,
        minLength: {
          value: minLength,
          message: "Input must be at least two characters",
        },
      })}
      type={type || "text"}
      pattern={pattern}
    />

    {errors && (
      <p>
        {errors[name]?.type === "required" && `${label} is required`}
        {errors[name]?.type === "minLength" &&
          `${label} must be at least ${minLength} characters`}
        {errors[name]?.type === "pattern" && `Invalid format for ${label}`}
      </p>
    )}
  </>
);

export default UserInput;

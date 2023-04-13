import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import styled from "styled-components";

import Users, { User }from "./Users";
import UserInput from "./UserInput"; 

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  margin: 0 auto;
  width: 97vw;
  box-shadow: 5px 4px 3px #cec9c9;
  padding: 2rem;
  background-color: white;
  margin-top: 1rem;
  @media (min-width: 641px) {
    max-width: 50vw;
  }
`;

const Headline = styled.h1`
  color: #11541f;
  margin-bottom: 1rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: self-end;
  margin-top: 1rem;
`;

const Button = styled.input`
  padding: 10px;
  border: none;
  background-color: #e8c05a;
  color: white;
  font-size: medium;
  width: 30vw;
  &:hover {
    background-color: #f3cd6e;
  }
  @media (min-width: 641px) {
    max-width: 15vw;
  }
`;

export default function UserForm() {
  const methods = useForm<FormValues>({mode: "onTouched"}); 
  const { register, formState: { errors } } = methods; 
  const [users, setUsers] = useState<User[]>([]); 

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    setUsers([...users, data]);
    e?.target.reset();
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <Headline>Registration Form</Headline>

        <UserInput
          label="First Name"
          name="firstName"
          register={register}
          minLength={2}
          errors={errors}
        />

        <UserInput 
          label="Last Name"
          name="lastName"
          register={register}
          minLength={2}
          errors={errors}
        />

        <UserInput 
          label="Phone"
          name="phone"
          register={register}
          optional={false}
          errors={errors}
          pattern="^[0-9()+-]+$"
        />

        <UserInput 
          label="Email"
          name="email"
          register={register}
          type="email"
          errors={errors}
          pattern="^\S+@\S+\.\S+$"
        />

        <Wrapper>
          <Button type="submit" />
        </Wrapper>

      </StyledForm>

      <Users users={users} />
    </FormProvider>
  );
}
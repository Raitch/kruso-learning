import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useRecoilState } from "recoil";

import Users from "../users/Users";
import UserInput from "../userInput/UserInput";
import { usersState } from "../../recoil/recoilState";
import { Headline, StyledForm, Wrapper, Button } from "./UserFormStyled";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export default function UserForm() {
  const methods = useForm<FormValues>({ mode: "onTouched" });
  const {
    register,
    formState: { errors },
  } = methods;
  // const [users, setUsers] = useState<User[]>([]);
  const [users, setUsers] = useRecoilState(usersState);

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    setUsers([...users, data]);
    e?.target.reset();
  };

  const rePhone = /^[0-9()+-]+$/;
  const reMail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
          pattern={rePhone}
          mess="Use numbers () + - only "
        />

        <UserInput
          label="Email"
          name="email"
          register={register}
          errors={errors}
          pattern={reMail}
          mess="Invalid format, please use: example@mail.com syntax"
        />

        <Wrapper>
          <Button type="submit" />
        </Wrapper>
      </StyledForm>

      <Users />
    </FormProvider>
  );
}

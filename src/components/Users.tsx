import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 97vw;
  border-radius: 10px;
  background-color: #fffaec;
  display: grid;
  margin: 0 auto;
  color: #66361f;
  display: grid;
  padding: 20px;
  text-align: center;
  gap: 5px;
  @media (min-width: 641px) {
    max-width: 18vw;
  }

  &:nth-child(even) {
    background-color: #e1ebd4;
    color: #11541f; 
  }
`;

const UsersWrapper = styled.div`
  @media (min-width: 641px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  }
`;

const UserHeadline = styled.h2`
  text-align: center;
  margin: 2rem 0;
  color: #11541f;
`;

export interface User {
  firstName: string; 
  lastName: string; 
  phone?: string; 
  email: string; 
}

type UsersProps = {
  users: User[]; 
}

const Users = ({ users }: UsersProps) => (
    <div>
      <UserHeadline>Users:</UserHeadline>
      <UsersWrapper>
        {users.map((user) => (
          <Wrapper>
            <div>{user.firstName} {user.lastName}</div>
            {user.phone && (
            <div><PhoneIcon style={{ height: "15px" }} /> {user.phone}</div>
            )}
            <div><EnvelopeIcon style={{ height: "15px" }} /> {user.email}</div>
          </Wrapper>
        ))}
      </UsersWrapper>
    </div>
  );


export default Users; 
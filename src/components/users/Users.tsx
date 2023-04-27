import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useRecoilValue } from "recoil";
import { usersState } from "../../recoil/recoilState";
import { UserHeadline, UsersWrapper, Wrapper } from "./UserStyled";

const Users = () => {
  const users = useRecoilValue(usersState);
  return (
    <div>
      {users.length > 0 && <UserHeadline>Users:</UserHeadline>}
      <UsersWrapper>
        {users.map((user) => (
          <Wrapper>
            <div>
              {user.firstName} {user.lastName}
            </div>
            {user.phone && (
              <div>
                <PhoneIcon style={{ height: "15px" }} /> {user.phone}
              </div>
            )}
            <div>
              <EnvelopeIcon style={{ height: "15px" }} /> {user.email}
            </div>
          </Wrapper>
        ))}
      </UsersWrapper>
    </div>
  );
};

export default Users;

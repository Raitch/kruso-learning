import styled from "styled-components";
import { breakpoint } from "../../styles/mediaQuery";

export const Wrapper = styled.div`
  width: 97vw;
  border-radius: 10px;
  background-color: ${(props) => props.theme.userBgV1};
  display: grid;
  margin: 0 auto;
  color: ${(props) => props.theme.userColorV1};
  display: grid;
  padding: 20px;
  text-align: center;
  @media (min-width: ${breakpoint.medium}) {
    max-width: 46vw;
  }
  @media (min-width: ${breakpoint.large}) {
    max-width: 24vw;
  }

  &:nth-child(even) {
    background-color: ${(props) => props.theme.userBgV2};
    color: ${(props) => props.theme.userColorV2};
  }
`;

export const UsersWrapper = styled.div`
  display: grid; 
  row-gap: 1rem; 
  margin-bottom: 1rem; 
  @media (min-width: ${breakpoint.medium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${breakpoint.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr
  }
`;

export const UserHeadline = styled.h2`
  text-align: center;
  margin: 2rem 0;
  color: ${(props) => props.theme.headingColor};
`;
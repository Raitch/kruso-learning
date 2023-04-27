import styled from "styled-components";
import { breakpoint } from "../../styles/mediaQuery";

export const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  margin: 0 auto;
  width: 97vw;
  box-shadow: 5px 4px 3px ${(props) => props.theme.boxShadow};
  padding: 2rem;
  background-color: ${(props) => props.theme.formBg};
  margin-top: 1rem;
  @media (min-width: ${breakpoint.medium}) {
    max-width: 70vw;
  }
  @media (min-width: ${breakpoint.large}) {
    max-width: 50vw;
  }
`;

export const Headline = styled.h1`
  color: ${(props) => props.theme.headingColor};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: grid;
  justify-items: self-end;
  margin-top: 1rem;
`;

export const Button = styled.input`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  font-size: medium;
  width: 30vw;
  &:hover {
    background-color: ${(props) => props.theme.buttonBgHover};
    color: ${(props) => props.theme.buttonColorHover};
  }
  @media (min-width: ${breakpoint.medium}) {
    max-width: 15vw;
  }
`;

import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.labelColor};
`;

export const StyledInput = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: large;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 1rem;
  color: #b60808;
`; 
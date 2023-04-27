import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";


export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledRoot = styled(Accordion.Root)`
  border-radius: 6px;
  width: 300px;
  background-color: #fee3ff;
  border: 2px solid #decdf5;
  box-shadow: 4px 4px 5px #dbbfff;
`;

export const StyledHeader = styled(Accordion.Header)`
  display: grid;
  font-size: 15px;
`;

export const StyledItem = styled(Accordion.Item)`
  overflow: hidden;
  border-bottom: 1px solid #fee3ff;
  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StyledTrigger = styled(Accordion.Trigger)`
  background: transparent;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  background-color: white;
  border: none;
`;

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  padding: 15px 20px;
  color: #933a8a;
`;
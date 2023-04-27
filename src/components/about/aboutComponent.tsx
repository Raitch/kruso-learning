import React from "react";

import {
  Wrapper,
  StyledRoot,
  StyledItem,
  StyledHeader,
  StyledTrigger,
  StyledContent,
} from "./aboutStyled";

const About = () => (
  <Wrapper>
    <StyledRoot type="single" collapsible>
      <StyledItem value="item-1">
        <StyledHeader>
          <StyledTrigger>Are raccoons cute?</StyledTrigger>
          <StyledContent>Yes</StyledContent>
        </StyledHeader>
      </StyledItem>

      <StyledItem value="item-2">
        <StyledHeader>
          <StyledTrigger>Can raccoons roll?</StyledTrigger>
          <StyledContent>Yes</StyledContent>
        </StyledHeader>
      </StyledItem>

      <StyledItem value="item-3">
        <StyledHeader>
          <StyledTrigger>Should raccoons rule the world?</StyledTrigger>
          <StyledContent>Yes</StyledContent>
        </StyledHeader>
      </StyledItem>
    </StyledRoot>
  </Wrapper>
);

export default About;

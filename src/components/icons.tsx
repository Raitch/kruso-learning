import styled from "styled-components";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const SmallBurger = styled(HamburgerMenuIcon)`
  height: 2rem;
  width: 2rem;
`;

const SmallCross = styled(Cross1Icon)`
  height: 2rem; 
  width: 2rem; 
`;

export const BurgerIcon = () => <SmallBurger />;

export const CrossIcon = () => <SmallCross />; 


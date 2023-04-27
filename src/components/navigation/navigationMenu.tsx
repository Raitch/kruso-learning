import { useState } from "react";
import { useRouter } from "next/router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from "styled-components";
import { breakpoint } from "../../styles/mediaQuery";
import {BurgerIcon, CrossIcon} from "../icons";

interface NavProps {
  href: string;
  children: React.ReactNode;
}

const NavigationRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
  background-color: white;
  box-shadow: 0 2px 10px #cec9c9;
  font-family: Arial, Helvetica, sans-serif;
`;

const NavigationList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  margin: 0;
  @media (max-width: ${breakpoint.medium}) {
    flex-direction: column;
  }
`;

const NavigationLink = styled(NavigationMenu.Link)<{ active: boolean }>`
  display: block;
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  border-radius: 4px;
  font-size: 15px;
  &:hover {
    background-color: #ededed;
  }
`;

const NavigationTrigger = styled(NavigationMenu.Trigger)`
  padding: 8px 12px;
  font-size: 15px;
  border: none;
  background-color: white;
`;

const Link = ({ href, ...props }: NavProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return <NavigationLink href={href} active={isActive} {...props} />;
};

const Nav = () => {
  const [open, Setopen] = useState(false); 

  const handleClick = () => {
    Setopen(!open); 
  }

  return(
  <NavigationRoot>
    <div onClick={handleClick} aria-hidden="true">
      {open ? (<CrossIcon/>) : (<BurgerIcon />)}
    </div>
    <NavigationList>
      <NavigationMenu.Item>
        <Link href="/">Home</Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationTrigger>Learning</NavigationTrigger>
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.Item>
              <Link href="/about">About</Link>
              <Link href="/quotes">Quotes</Link>
            </NavigationMenu.Item>
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationList>
  </NavigationRoot>
)};

export default Nav;

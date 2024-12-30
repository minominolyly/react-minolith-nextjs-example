"use client";
import ColorSchemeContext from "@/contexts/ColorSchemeContext";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { GiJapan, GiVampireDracula, GiYinYang } from "react-icons/gi";
import { LuCircleDashed } from "react-icons/lu";
import {
  Button,
  ColorScheme,
  Hamburger,
  Header,
  Link as MinolithLink,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  NavMenuItem,
} from "react-minolith";

export default function AppHeader(props: AppHeaderProps) {
  const colorScheme = useContext(ColorSchemeContext);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navMenuItems = (
    <>
      <NavMenuItem as={MinolithLink} onClick={() => props.changeTheme("")}>
        <LuCircleDashed />
        {"Change theme to Default"}
      </NavMenuItem>
      <NavMenuItem as={MinolithLink} onClick={() => props.changeTheme("wairo")}>
        <GiJapan />
        {"Change theme to Wairo"}
      </NavMenuItem>
      <NavMenuItem as={MinolithLink} onClick={() => props.changeTheme("solar")}>
        <GiYinYang />
        {"Change theme to Solar"}
      </NavMenuItem>
      <NavMenuItem
        as={MinolithLink}
        onClick={() => props.changeTheme("vampire")}
      >
        <GiVampireDracula />
        {"Change theme to Vampire"}
      </NavMenuItem>
    </>
  );

  return (
    <Header isSticky={true}>
      <Nav>
        <NavAccordion>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger
                isActive={isMenuActive}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-menu"
                onClick={() => {
                  setIsMenuActive(!isMenuActive);
                }}
              />
            </NavBrandLeft>
            <NavBrandCenter>{"react-minolith Next.js example"}</NavBrandCenter>
            <NavBrandRight>
              <Button
                spacing={{ margin: 1 }}
                colorName={colorScheme === "light" ? "orange" : "blue"}
                onClick={() =>
                  props.switchColorScheme(
                    colorScheme === "light" ? "dark" : "light"
                  )
                }
              >
                {colorScheme === "light" ? <FaSun /> : <FaMoon />}
              </Button>
            </NavBrandRight>
          </NavBrand>
          <NavMenu isActive={isMenuActive}>{navMenuItems}</NavMenu>
        </NavAccordion>
      </Nav>
    </Header>
  );
}

interface AppHeaderProps {
  switchColorScheme: (colorScheme: ColorScheme) => void;
  changeTheme: (theme: string) => void;
}

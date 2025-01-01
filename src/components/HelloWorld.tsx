"use client";
import {
  Button,
    ColorScheme,
    Container,
    Footer,
    Hamburger,
    Header,
    Heading,
    Main,
    MinolithStatic,
    Nav,
    NavAccordion,
    NavBrand,
    NavBrandCenter,
    NavBrandLeft,
    NavBrandRight,
    NavMenu,
    NavMenuItem,
    Section,
  } from "react-minolith";
  import { useState } from "react";

  export default function HelloWorld() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
      <MinolithStatic colorScheme={colorScheme}>
        <Header>
          <Nav>
            <NavAccordion>
              <NavBrand>
                <NavBrandLeft>
                  <Hamburger
                    isActive={isActive}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu"
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                  />
                </NavBrandLeft>
                <NavBrandCenter>
                </NavBrandCenter>
                <NavBrandRight>
                  <Button
                  spacing={{ margin: 1 }}
                  colorName={colorScheme === "light" ? "orange" : "blue"}
                  onClick={() =>
                    setColorScheme(
                      colorScheme === "light" ? "dark" : "light"
                    )
                  }
                >
                  {colorScheme}
                </Button>
                </NavBrandRight>
              </NavBrand>
              <NavMenu isActive={isActive}>
                <NavMenuItem as="a" href="/">
                  {"About"}
                </NavMenuItem>
                <NavMenuItem as="a" href="/">
                  {"Products"}
                </NavMenuItem>
                <NavMenuItem as="a" href="/">
                  {"Contact"}
                </NavMenuItem>
              </NavMenu>
            </NavAccordion>
          </Nav>
        </Header>
        <Main>
          <Container>
            <Section spacing={{ padding: { y: 1 } }}>
              <Heading level={1}>{"Hello world"}</Heading>
            </Section>
          </Container>
        </Main>
        <Footer>
          <Container>
            {"©anonymous"}
          </Container>
        </Footer>
      </MinolithStatic>
    );
  }

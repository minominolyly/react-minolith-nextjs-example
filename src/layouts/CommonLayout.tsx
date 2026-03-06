/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import AppHeader from "@/components/AppHeader";
import ColorThemeContext from "@/contexts/ColorThemeContext";
import defaultThemeConfig from "@/themes/default.theme";
import nordicThemeConfig from "@/themes/nordic.theme";
import primalThemeConfig from "@/themes/primal.theme";
import solarThemeConfig from "@/themes/solar.theme";
import vampireThemeConfig from "@/themes/vampire.theme";
import wairoThemeConfig from "@/themes/wairo.theme";
import ColorTheme from "@/types/ColorTheme";
import localStorageUtility from "@/utilities/localStorageUtility";
import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { FaCopyright } from "react-icons/fa6";
import {
  ColorScheme,
  Container,
  Footer,
  Main,
  Minolith,
  MinolithClientCustomCssVariablesProvider,
  Span,
} from "react-minolith";

export default function CommonLayout(props: CommonLayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(
    undefined,
  );
  const [theme, setTheme] = useState<ColorTheme>("default");

  const themeConfig =
    theme === "vampire"
      ? vampireThemeConfig
      : theme === "solar"
        ? solarThemeConfig
        : theme === "primal"
          ? primalThemeConfig
          : theme === "nordic"
            ? nordicThemeConfig
            : theme === "wairo"
              ? wairoThemeConfig
              : defaultThemeConfig;

  useLayoutEffect(() => {
    const selectedColorScheme =
      localStorageUtility.getData<ColorScheme>("colorScheme");

    if (selectedColorScheme) {
      setColorScheme(selectedColorScheme);
      return;
    }

    let preferdColorScheme: "light" | "dark" = "light";
    if (typeof window !== "undefined") {
      const isDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      preferdColorScheme = isDark ? "dark" : "light";

      setColorScheme(preferdColorScheme);
      localStorageUtility.setData<string>("colorScheme", preferdColorScheme);
    }
  }, []);

  return (
    <ColorThemeContext.Provider value={theme}>
      <MinolithClientCustomCssVariablesProvider
        minolithCssVariables={themeConfig}
      >
        <Minolith colorScheme={colorScheme}>
          <AppHeader
            switchColorScheme={(colorScheme) => setColorScheme(colorScheme)}
            changeTheme={(theme) => setTheme(theme)}
          />
          <Main>{props.children}</Main>
          <Footer
            back={{
              color: {
                colorScheme: {
                  light: {
                    default: {
                      name: "gray",
                      lightness: 85,
                    },
                  },
                  dark: {
                    default: {
                      name: "gray",
                      lightness: 15,
                    },
                  },
                },
              },
            }}
            spacing={{
              padding: { y: 0.5 },
            }}
          >
            <Container>
              <Span
                fore={{
                  color: {
                    colorScheme: {
                      light: {
                        default: {
                          name: "gray",
                          lightness: 35,
                        },
                      },
                      dark: {
                        default: {
                          name: "gray",
                          lightness: 70,
                        },
                      },
                    },
                  },
                }}
              >
                <FaCopyright />
              </Span>
              <Span
                fore={{
                  color: {
                    colorScheme: {
                      light: {
                        default: {
                          name: "gray",
                          lightness: 35,
                        },
                      },
                      dark: {
                        default: {
                          name: "gray",
                          lightness: 70,
                        },
                      },
                    },
                  },
                }}
              >
                {"minominolyly"}
              </Span>
            </Container>
          </Footer>
        </Minolith>
      </MinolithClientCustomCssVariablesProvider>
    </ColorThemeContext.Provider>
  );
}

export interface CommonLayoutProps extends PropsWithChildren {}

/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import variableThemeConfigFn, {
  VariableThemeConfigFnArgs,
} from "@/themes/variable.theme";
import localStorageUtility from "@/utilities/localStorageUtility";
import {
  PropsWithChildren,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { FaCopyright, FaMoon, FaSun } from "react-icons/fa6";
import {
  Button,
  ColorScheme,
  Container,
  Div,
  Footer,
  Hamburger,
  Header,
  Input,
  Label,
  Main,
  Minolith,
  MinolithClientCustomCssVariablesProvider,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  Span,
} from "react-minolith";
import variableThemeLayoutReducer from "./reducer";

const initialArgs: VariableThemeConfigFnArgs = {
  colorLightness50: 50,
  colorLightnessOffsetLighter: 5,
  colorLightnessOffsetDarker: 5,
  colorGray: {
    chroma: 0.05,
    name: "gray",
    hue: 0,
  },
  colorRed: {
    chroma: 0.15,
    name: "red",
    hue: 0,
  },
  colorCoral: {
    chroma: 0.15,
    name: "coral",
    hue: 25,
  },
  colorOrange: {
    chroma: 0.15,
    name: "orange",
    hue: 50,
  },
  colorYellow: {
    chroma: 0.15,
    name: "yellow",
    hue: 100,
  },
  colorLime: {
    chroma: 0.15,
    name: "lime",
    hue: 125,
  },
  colorGreen: {
    chroma: 0.15,
    name: "green",
    hue: 150,
  },
  colorCyan: {
    chroma: 0.15,
    name: "cyan",
    hue: 200,
  },
  colorBlue: {
    chroma: 0.15,
    name: "blue",
    hue: 250,
  },
  colorViolet: {
    chroma: 0.15,
    name: "violet",
    hue: 300,
  },
  colorMagenta: {
    chroma: 0.15,
    name: "magenta",
    hue: 330,
  },
};

export default function VariableThemeLayout(props: VariableThemeLayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(
    undefined,
  );

  const [variableThemeConfigFnArgs, dispatch] = useReducer(
    variableThemeLayoutReducer,
    initialArgs,
  );

  const [colorfulChroma, setColorfulChroma] = useState(0.15);

  const themeConfig = variableThemeConfigFn(variableThemeConfigFnArgs);

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

  const [isMenuActive, setIsMenuActive] = useState(false);

  const minLightness = variableThemeConfigFnArgs.colorLightness50 - variableThemeConfigFnArgs.colorLightnessOffsetDarker * 9;
  const maxLightness = variableThemeConfigFnArgs.colorLightness50 + variableThemeConfigFnArgs.colorLightnessOffsetLighter * 9;

  const navMenuItems = (
    <>
      <Div spacing={{ padding: 0.5 }}>
        <Label>{"Lightness"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName={minLightness < 0 ? "red" : "gray"}>
            <Span>
              {`Lightness Min(05)`}
            </Span>
          </Label>
          <Div>
            {minLightness}
          </Div>
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label>
            <Span>
              {`Lightness Center(50)`}
            </Span>
          </Label>
          <Div>
            {variableThemeConfigFnArgs.colorLightness50}
          </Div>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorLightness50}
            min={15}
            max={85}
            step={0.01}
            onChange={(event) => {
              dispatch({
                type: "change-color-lightness50",
                payload: {
                  colorLightness50: event.target.valueAsNumber,
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName={maxLightness > 100 ? "red" : "gray"}>
            <Span>
              {`Lightness Max(95)`}
            </Span>
          </Label>
          <Div>
            {maxLightness}
          </Div>
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label>
            <Span>
              {`Lightness Offset Darker: ${variableThemeConfigFnArgs.colorLightnessOffsetDarker}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorLightnessOffsetDarker}
            min={0.01}
            max={10}
            step={0.01}
            onChange={(event) => {
              dispatch({
                type: "change-color-lightness-offset-darker",
                payload: {
                  colorLightnessOffsetDarker: event.target.valueAsNumber,
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label>
            <Span>
              {`Lightness Offset Lighter: ${variableThemeConfigFnArgs.colorLightnessOffsetLighter}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorLightnessOffsetLighter}
            min={0.01}
            max={10}
            step={0.01}
            onChange={(event) => {
              dispatch({
                type: "change-color-lightness-offset-lighter",
                payload: {
                  colorLightnessOffsetLighter: event.target.valueAsNumber,
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="gray">{"Gray"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="gray">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorGray.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorGray.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-gray",
                payload: {
                  colorGray: {
                    name: variableThemeConfigFnArgs.colorGray.name,
                    chroma: variableThemeConfigFnArgs.colorGray.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="gray">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorGray.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorGray.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-gray",
                payload: {
                  colorGray: {
                    name: variableThemeConfigFnArgs.colorGray.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorGray.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label>{"Colorful"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label>
            <Span>
              {`Chroma: ${colorfulChroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={colorfulChroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              const val = event.target.valueAsNumber
              setColorfulChroma(val);
              dispatch({
                type: "change-colorful-chroma",
                payload: {
                  colorfulChroma: val,
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="red">{"Red"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="red">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorRed.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorRed.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-red",
                payload: {
                  colorRed: {
                    name: variableThemeConfigFnArgs.colorRed.name,
                    chroma: variableThemeConfigFnArgs.colorRed.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="red">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorRed.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorRed.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-red",
                payload: {
                  colorRed: {
                    name: variableThemeConfigFnArgs.colorRed.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorRed.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="coral">{"Coral"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="coral">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorCoral.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorCoral.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-coral",
                payload: {
                  colorCoral: {
                    name: variableThemeConfigFnArgs.colorCoral.name,
                    chroma: variableThemeConfigFnArgs.colorCoral.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="coral">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorCoral.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorCoral.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-coral",
                payload: {
                  colorCoral: {
                    name: variableThemeConfigFnArgs.colorCoral.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorCoral.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="orange">{"Orange"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="orange">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorOrange.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorOrange.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-orange",
                payload: {
                  colorOrange: {
                    name: variableThemeConfigFnArgs.colorOrange.name,
                    chroma: variableThemeConfigFnArgs.colorOrange.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="orange">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorOrange.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorOrange.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-orange",
                payload: {
                  colorOrange: {
                    name: variableThemeConfigFnArgs.colorOrange.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorOrange.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="yellow">{"Yellow"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="yellow">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorYellow.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorYellow.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-yellow",
                payload: {
                  colorYellow: {
                    name: variableThemeConfigFnArgs.colorYellow.name,
                    chroma: variableThemeConfigFnArgs.colorYellow.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="yellow">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorYellow.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorYellow.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-yellow",
                payload: {
                  colorYellow: {
                    name: variableThemeConfigFnArgs.colorYellow.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorYellow.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="lime">{"Lime"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="lime">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorLime.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorLime.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-lime",
                payload: {
                  colorLime: {
                    name: variableThemeConfigFnArgs.colorLime.name,
                    chroma: variableThemeConfigFnArgs.colorLime.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="lime">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorLime.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorLime.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-lime",
                payload: {
                  colorLime: {
                    name: variableThemeConfigFnArgs.colorLime.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorLime.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="green">{"Green"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="green">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorGreen.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorGreen.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-green",
                payload: {
                  colorGreen: {
                    name: variableThemeConfigFnArgs.colorGreen.name,
                    chroma: variableThemeConfigFnArgs.colorGreen.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="green">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorGreen.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorGreen.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-green",
                payload: {
                  colorGreen: {
                    name: variableThemeConfigFnArgs.colorGreen.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorGreen.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="cyan">{"Cyan"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="cyan">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorCyan.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorCyan.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-cyan",
                payload: {
                  colorCyan: {
                    name: variableThemeConfigFnArgs.colorCyan.name,
                    chroma: variableThemeConfigFnArgs.colorCyan.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="cyan">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorCyan.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorCyan.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-cyan",
                payload: {
                  colorCyan: {
                    name: variableThemeConfigFnArgs.colorCyan.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorCyan.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="blue">{"Blue"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="blue">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorBlue.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorBlue.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-blue",
                payload: {
                  colorBlue: {
                    name: variableThemeConfigFnArgs.colorBlue.name,
                    chroma: variableThemeConfigFnArgs.colorBlue.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="blue">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorBlue.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorBlue.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-blue",
                payload: {
                  colorBlue: {
                    name: variableThemeConfigFnArgs.colorBlue.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorBlue.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="violet">{"Violet"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="violet">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorViolet.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorViolet.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-violet",
                payload: {
                  colorViolet: {
                    name: variableThemeConfigFnArgs.colorViolet.name,
                    chroma: variableThemeConfigFnArgs.colorViolet.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="violet">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorViolet.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorViolet.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-violet",
                payload: {
                  colorViolet: {
                    name: variableThemeConfigFnArgs.colorViolet.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorViolet.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
      <Div spacing={{ padding: 0.5 }}>
        <Label colorName="magenta">{"Magenta"}</Label>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="magenta">
            <Span>
              {`Hue: ${variableThemeConfigFnArgs.colorMagenta.hue}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorMagenta.hue}
            min={0}
            max={360}
            step={1}
            onChange={(event) => {
              dispatch({
                type: "change-color-magenta",
                payload: {
                  colorMagenta: {
                    name: variableThemeConfigFnArgs.colorMagenta.name,
                    chroma: variableThemeConfigFnArgs.colorMagenta.chroma,
                    hue: event.target.valueAsNumber,
                  },
                },
              });
            }}
          />
        </Div>
        <Div spacing={{ padding: 0.25 }}>
          <Label colorName="magenta">
            <Span>
              {`Chroma: ${variableThemeConfigFnArgs.colorMagenta.chroma}`}
            </Span>
          </Label>
          <Input
            type="range"
            value={variableThemeConfigFnArgs.colorMagenta.chroma}
            min={0}
            max={0.4}
            step={0.001}
            onChange={(event) => {
              dispatch({
                type: "change-color-magenta",
                payload: {
                  colorMagenta: {
                    name: variableThemeConfigFnArgs.colorMagenta.name,
                    chroma: event.target.valueAsNumber,
                    hue: variableThemeConfigFnArgs.colorMagenta.hue,
                  },
                },
              });
            }}
          />
        </Div>
      </Div>
    </>
  );

  return (
    <MinolithClientCustomCssVariablesProvider
      minolithCssVariables={themeConfig}
    >
      <Minolith colorScheme={colorScheme}>
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
                <NavBrandCenter>
                  {"react-minolith Next.js example"}
                </NavBrandCenter>
                <NavBrandRight>
                  <Div spacing={{ padding: { x: 0.5 } }}>
                    <Button
                      spacing={{ margin: 1 }}
                      colorName={colorScheme === "light" ? "orange" : "blue"}
                      onClick={() =>
                        setColorScheme(
                          colorScheme === "light" ? "dark" : "light",
                        )
                      }
                    >
                      {colorScheme === "light" ? <FaSun /> : <FaMoon />}
                    </Button>
                  </Div>
                </NavBrandRight>
              </NavBrand>
              <NavMenu
                isActive={isMenuActive}
                css={{
                  maxHeight: "25rem",
                  overflowY: "auto",
                }}
              >
                {navMenuItems}
              </NavMenu>
            </NavAccordion>
          </Nav>
        </Header>
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
  );
}

export interface VariableThemeLayoutProps extends PropsWithChildren {}

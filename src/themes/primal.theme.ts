"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariables } from "react-minolith";

const colorChromaGray = 0.01;
const colorChromaColorful = 0.15;

const colorLightness50 = 53;
const colorLightnessOffsetLighter = 3.5;
const colorLightnessOffsetDarker = 3.5;


const defaultForeLight = "hsla(36, 32%, 30%, 1)";
const defaultBackLight = "hsla(36, 38%, 98%, 1)";
const defaultForeDark = "hsla(34, 39%, 74%, 1)";
const defaultBackDark = "hsla(32, 21%, 8%, 1)";

const colorGray: ColorInfo = {
  name: "gray",
  hue: 70.81,
  chroma: colorChromaGray,
};

const colorRed: ColorInfo = {
  name: "red",
  hue: 28.26,
  chroma: colorChromaColorful,
};

const colorCoral: ColorInfo = {
  name: "coral",
  hue: 35.30,
  chroma: colorChromaColorful,
};

const colorOrange: ColorInfo = {
  name: "orange",
  hue: 46.88,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 85.69,
  chroma: colorChromaColorful,
};

const colorLime: ColorInfo = {
  name: "lime",
  hue: 115.07,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 156.17,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 212.85,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 239.68,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 311.66,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 346.82,
  chroma: colorChromaColorful,
};

const primalThemeConfig: MinolithCssVariables = {
  color: {
    gray: minolithThemeUtility.getColorVar(
      colorGray,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    red: minolithThemeUtility.getColorVar(
      colorRed,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    coral: minolithThemeUtility.getColorVar(
      colorCoral,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    orange: minolithThemeUtility.getColorVar(
      colorOrange,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    yellow: minolithThemeUtility.getColorVar(
      colorYellow,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    green: minolithThemeUtility.getColorVar(
      colorGreen,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    lime: minolithThemeUtility.getColorVar(
      colorLime,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    cyan: minolithThemeUtility.getColorVar(
      colorCyan,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    blue: minolithThemeUtility.getColorVar(
      colorBlue,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    violet: minolithThemeUtility.getColorVar(
      colorViolet,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    magenta: minolithThemeUtility.getColorVar(
      colorMagenta,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker
    ),
    colorScheme: {
      default: {
        default: {
          fore: {
            light: defaultForeLight,
            dark: defaultForeDark,
          },
          back: {
            light: defaultBackLight,
            dark: defaultBackDark,
          },
        },
      },
      components: {
        accordion: {
          default: {
            default: {
              fore: {
                light: defaultForeLight,
                dark: defaultForeDark,
              },
              back: {
                light: defaultBackLight,
                dark: defaultBackDark,
              },
            },
          },
        },
        card: {
          default: {
            default: {
              fore: {
                light: defaultForeLight,
                dark: defaultForeDark,
              },
            },
          },
          cardHeader: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
          cardBody: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
          cardFooter: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
        },
        dialogue: {
          default: {
            default: {
              fore: {
                light: defaultForeLight,
                dark: defaultForeDark,
              },
            },
          },
          dialogueName: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
          dialogueMessage: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
        },
        message: {
          default: {
            default: {
              fore: {
                light: defaultForeLight,
                dark: defaultForeDark,
              },
            },
          },
          messageHeader: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
          messageBody: {
            default: {
              default: {
                fore: {
                  light: defaultForeLight,
                  dark: defaultForeDark,
                },
              },
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: {
      main: "var(--font-family-noto-serif-jp)",
      heading: "var(--font-family-new-tegomin)",
    },
  },
};

export default primalThemeConfig;

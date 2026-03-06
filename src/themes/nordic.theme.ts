"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariables } from "react-minolith";

const colorChromaGray = 0.02;
const colorChromaColorful = 0.12;

const colorLightness50 = 53;
const colorLightnessOffsetLighter = 3.5;
const colorLightnessOffsetDarker = 3.5;

const defaultForeLight = "rgb(76, 86, 106)";
const defaultBackLight = "rgb(242, 244, 248)";
const defaultForeDark = "rgb(236, 239, 244)";
const defaultBackDark = "rgb(46, 52, 64)";

const colorGray: ColorInfo = {
  name: "gray",
  hue: 264.22,
  chroma: colorChromaGray,
};

const colorRed: ColorInfo = {
  name: "red",
  hue: 15.35,
  chroma: colorChromaColorful,
};

const colorCoral: ColorInfo = {
  name: "coral",
  hue: 25.35,
  chroma: colorChromaColorful,
};

const colorOrange: ColorInfo = {
  name: "orange",
  hue: 38.24,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 84.07,
  chroma: colorChromaColorful,
};

const colorLime: ColorInfo = {
  name: "lime",
  hue: 110.07,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 131.04,
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
  hue: 332.69,
  chroma: colorChromaColorful,
};

const nordicThemeConfig: MinolithCssVariables = {
  color: {
    gray: minolithThemeUtility.getColorVar(
      colorGray,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    red: minolithThemeUtility.getColorVar(
      colorRed,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    coral: minolithThemeUtility.getColorVar(
      colorCoral,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    orange: minolithThemeUtility.getColorVar(
      colorOrange,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    yellow: minolithThemeUtility.getColorVar(
      colorYellow,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    lime: minolithThemeUtility.getColorVar(
      colorLime,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    green: minolithThemeUtility.getColorVar(
      colorGreen,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    cyan: minolithThemeUtility.getColorVar(
      colorCyan,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    blue: minolithThemeUtility.getColorVar(
      colorBlue,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    violet: minolithThemeUtility.getColorVar(
      colorViolet,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
    ),
    magenta: minolithThemeUtility.getColorVar(
      colorMagenta,
      colorLightness50,
      colorLightnessOffsetLighter,
      colorLightnessOffsetDarker,
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

export default nordicThemeConfig;

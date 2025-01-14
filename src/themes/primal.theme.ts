"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariable } from "react-minolith";

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

const primalThemeConfig: MinolithCssVariable = {
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
    light: {
      default: {
        default: {
          fore: defaultForeLight,
          back: defaultBackLight,
        },
      },
      components: {
        accordion: {
          default: {
            default: {
              fore: defaultForeLight,
            },
          },
          accordionSummary: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
          accordionDetails: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
        },
        card: {
          default: {
            default: {
              fore: defaultForeLight,
            },
          },
          cardHeader: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
          cardBody: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
          cardFooter: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
        },
        dialogue: {
          default: {
            default: {
              fore: defaultForeLight,
            },
          },
          dialogueName: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
          dialogueMessage: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
        },
        message: {
          default: {
            default: {
              fore: defaultForeLight,
            },
          },
          messageHeader: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
          messageBody: {
            default: {
              default: {
                fore: defaultForeLight,
              },
            },
          },
        },
      },
    },
    dark: {
      default: {
        default: {
          fore: defaultForeDark,
          back: defaultBackDark,
        },
      },
      components: {
        accordion: {
          default: {
            default: {
              fore: defaultForeDark,
              back: defaultBackDark,
            },
          },
          accordionSummary: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
          accordionDetails: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
        },
        card: {
          default: {
            default: {
              fore: defaultForeDark,
            },
          },
          cardHeader: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
          cardBody: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
          cardFooter: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
        },
        dialogue: {
          default: {
            default: {
              fore: defaultForeDark,
            },
          },
          dialogueName: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
          dialogueMessage: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
        },
        message: {
          default: {
            default: {
              fore: defaultForeDark,
            },
          },
          messageHeader: {
            default: {
              default: {
                fore: defaultForeDark,
              },
            },
          },
          messageBody: {
            default: {
              default: {
                fore: defaultForeDark,
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

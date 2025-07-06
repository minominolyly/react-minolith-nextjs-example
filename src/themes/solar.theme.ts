"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariable } from "react-minolith";

const colorChromaGray = 0.05;
const colorChromaColorful = 0.2;

const colorLightness50 = 59;
const colorLightnessOffsetLighter = 4.5;
const colorLightnessOffsetDarker = 4.5;

const colorGray: ColorInfo = {
  name: "gray",
  // hue: 90,
  hue: 219.82,
  chroma: colorChromaGray,
};

const colorRed: ColorInfo = {
  name: "red",
  hue: 27.12,
  chroma: colorChromaColorful,
};

const colorCoral: ColorInfo = {
  name: "coral",
  hue: 33.31,
  chroma: colorChromaColorful,
};

const colorOrange: ColorInfo = {
  name: "orange",
  hue: 39.5,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 85.71,
  chroma: colorChromaColorful,
};

const colorLime: ColorInfo = {
  name: "lime",
  hue: 102.15,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 118.58,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 187.38,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 244.93,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 279.11,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 355.9,
  chroma: colorChromaColorful,
};

const defaultForeLight = "#002b36";
const defaultForeDark = "#fdf6e3";

const solarThemeConfig: MinolithCssVariable = {
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
    lime: minolithThemeUtility.getColorVar(
      colorLime,
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
          back: defaultForeDark,
        },
      },
      components: {
        accordion: {
          default: {
            default: {
              fore: defaultForeLight,
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
          back: defaultForeLight,
        },
      },
      components: {
        accordion: {
          default: {
            default: {
              fore: defaultForeDark,
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

export default solarThemeConfig;

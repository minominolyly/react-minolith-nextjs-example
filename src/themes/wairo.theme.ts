"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariable } from "react-minolith";

const colorChromaGray = 0.02;
const colorChromaColorful = 0.16;

const colorLightness50 = 65;
const colorLightnessOffsetLighter = 3.75;
const colorLightnessOffsetDarker = 3.75;

const colorGray: ColorInfo = {
  name: "gray",
  hue: 2.73,
  chroma: colorChromaGray,
};

const colorRed: ColorInfo = {
  name: "red",
  hue: 22.26,
  chroma: colorChromaColorful,
};

const colorCoral: ColorInfo = {
  name: "coral",
  hue: 37.84,
  chroma: colorChromaColorful,
};

const colorOrange: ColorInfo = {
  name: "orange",
  hue: 53.42,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 96.17,
  chroma: colorChromaColorful,
};

const colorLime: ColorInfo = {
  name: "lime",
  hue: 125.29,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 154.4,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 184.97,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 239.38,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 319.32,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 354.57,
  chroma: colorChromaColorful,
};

const wairoThemeConfig: MinolithCssVariable = {
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
  },
  typography: {
    fontFamily: {
      main: "var(--font-family-noto-serif-jp)",
      heading: "var(--font-family-new-tegomin)",
    },
  },
};

export default wairoThemeConfig;

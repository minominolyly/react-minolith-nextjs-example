"use client";
import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariable } from "react-minolith";

const colorChromaGray = 0.02;
const colorChromaColorful = 0.18;

const colorLightness50 = 58;
const colorLightnessOffsetLighter = 4.5;
const colorLightnessOffsetDarker = 4.5;

const colorGray: ColorInfo = {
  name: "gray",
  hue: 277.54,
  chroma: colorChromaGray,
};

const colorRed: ColorInfo = {
  name: "red",
  hue: 24.43,
  chroma: colorChromaColorful,
};

const colorCoral: ColorInfo = {
  name: "coral",
  hue: 45.49,
  chroma: colorChromaColorful,
};

const colorOrange: ColorInfo = {
  name: "orange",
  hue: 66.55,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 112.74,
  chroma: colorChromaColorful,
};

const colorLime: ColorInfo = {
  name: "lime",
  hue: 130.38,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 148.02,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 212.85,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 270.1,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 301.9,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 346.82,
  chroma: colorChromaColorful,
};

const vampireThemeConfig: MinolithCssVariable = {
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

export default vampireThemeConfig;

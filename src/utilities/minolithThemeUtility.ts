import ColorInfo from "@/models/ColorInfo";
import { Gradation, Oklch } from "react-minolith";

function getColorVar(
  color: ColorInfo,
  lightness50: number,
  lightnessOffsetLighter: number,
  lightnessOffsetDarker: number
): Gradation {
  let colorVar: Gradation = {};
  for (let i = 1; i <= 19; i++) {
    const gradation = i * 5;
    const chroma = color.chroma;

    const lightness =
      gradation < 50
        ? lightness50 - (10 - i) * lightnessOffsetDarker
        : gradation > 50
        ? lightness50 + (i - 10) * lightnessOffsetLighter
        : lightness50;

    const oklch: Oklch = {
      hue: color.hue,
      lightness: lightness,
      chroma: chroma,
    };
    colorVar = Object.assign(colorVar, {
      [gradation]: oklch,
    });
  }

  return colorVar;
}

const minolithThemeUtility = {
  getColorVar,
};

export default minolithThemeUtility;

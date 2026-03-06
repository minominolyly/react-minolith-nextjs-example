import ColorInfo from "@/models/ColorInfo";
import minolithThemeUtility from "@/utilities/minolithThemeUtility";
import { MinolithCssVariables } from "react-minolith";

export type VariableThemeConfigFnArgs = {
  colorLightness50: number;
  colorLightnessOffsetLighter: number;
  colorLightnessOffsetDarker: number;
  colorGray: ColorInfo;
  colorRed: ColorInfo;
  colorCoral: ColorInfo;
  colorOrange: ColorInfo;
  colorYellow: ColorInfo;
  colorLime: ColorInfo;
  colorGreen: ColorInfo;
  colorCyan: ColorInfo;
  colorBlue: ColorInfo;
  colorViolet: ColorInfo;
  colorMagenta: ColorInfo;
};

const variableThemeConfigFn = (
  args: VariableThemeConfigFnArgs,
): MinolithCssVariables => ({
  color: {
    gray: minolithThemeUtility.getColorVar(
      args.colorGray,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    red: minolithThemeUtility.getColorVar(
      args.colorRed,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    coral: minolithThemeUtility.getColorVar(
      args.colorCoral,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    orange: minolithThemeUtility.getColorVar(
      args.colorOrange,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    yellow: minolithThemeUtility.getColorVar(
      args.colorYellow,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    lime: minolithThemeUtility.getColorVar(
      args.colorLime,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    green: minolithThemeUtility.getColorVar(
      args.colorGreen,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    cyan: minolithThemeUtility.getColorVar(
      args.colorCyan,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    blue: minolithThemeUtility.getColorVar(
      args.colorBlue,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    violet: minolithThemeUtility.getColorVar(
      args.colorViolet,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
    magenta: minolithThemeUtility.getColorVar(
      args.colorMagenta,
      args.colorLightness50,
      args.colorLightnessOffsetLighter,
      args.colorLightnessOffsetDarker,
    ),
  },
  typography: {
    fontFamily: {
      main: "var(--font-family-noto-serif-jp)",
      heading: "var(--font-family-new-tegomin)",
    },
  },
});

export default variableThemeConfigFn;

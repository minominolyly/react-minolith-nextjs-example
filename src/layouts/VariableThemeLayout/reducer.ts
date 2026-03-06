import Action from "@/models/Action";
import { VariableThemeConfigFnArgs } from "@/themes/variable.theme";
import VariableThemeLayoutPayload from "./payload";

export default function variableThemeLayoutReducer(
  state: VariableThemeConfigFnArgs,
  action: Action<VariableThemeLayoutPayload>,
): VariableThemeConfigFnArgs {
  switch (action.type) {
    case "change-color-lightness50":
      return {
        ...state,
        colorLightness50: action.payload.colorLightness50
          ? action.payload.colorLightness50
          : state.colorLightness50,
      };
    case "change-color-lightness-offset-lighter":
      return {
        ...state,
        colorLightnessOffsetLighter: action.payload.colorLightnessOffsetLighter
          ? action.payload.colorLightnessOffsetLighter
          : state.colorLightnessOffsetLighter,
      };
    case "change-color-lightness-offset-darker":
      return {
        ...state,
        colorLightnessOffsetDarker: action.payload.colorLightnessOffsetDarker
          ? action.payload.colorLightnessOffsetDarker
          : state.colorLightnessOffsetDarker,
      };
    case "change-color-gray":
      return {
        ...state,
        colorGray: action.payload.colorGray
          ? action.payload.colorGray
          : state.colorGray,
      };
    case "change-colorful-chroma":
      return {
        ...state,
        colorRed: {
          ...state.colorRed,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorRed.chroma,
        },
        colorCoral: {
          ...state.colorCoral,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorCoral.chroma,
        },
        colorOrange: {
          ...state.colorOrange,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorOrange.chroma,
        },
        colorYellow: {
          ...state.colorYellow,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorYellow.chroma,
        },
        colorLime: {
          ...state.colorLime,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorLime.chroma,
        },
        colorGreen: {
          ...state.colorGreen,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorGreen.chroma,
        },
        colorCyan: {
          ...state.colorCyan,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorCyan.chroma,
        },
        colorBlue: {
          ...state.colorBlue,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorBlue.chroma,
        },
        colorViolet: {
          ...state.colorViolet,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorViolet.chroma,
        },
        colorMagenta: {
          ...state.colorMagenta,
          chroma: action.payload.colorfulChroma
            ? action.payload.colorfulChroma
            : state.colorMagenta.chroma,
        },
      };
    case "change-color-red":
      return {
        ...state,
        colorRed: action.payload.colorRed
          ? action.payload.colorRed
          : state.colorRed,
      };
    case "change-color-coral":
      return {
        ...state,
        colorCoral: action.payload.colorCoral
          ? action.payload.colorCoral
          : state.colorCoral,
      };
    case "change-color-orange":
      return {
        ...state,
        colorOrange: action.payload.colorOrange
          ? action.payload.colorOrange
          : state.colorOrange,
      };
    case "change-color-yellow":
      return {
        ...state,
        colorYellow: action.payload.colorYellow
          ? action.payload.colorYellow
          : state.colorYellow,
      };
    case "change-color-lime":
      return {
        ...state,
        colorLime: action.payload.colorLime
          ? action.payload.colorLime
          : state.colorLime,
      };
    case "change-color-green":
      return {
        ...state,
        colorGreen: action.payload.colorGreen
          ? action.payload.colorGreen
          : state.colorGreen,
      };
    case "change-color-cyan":
      return {
        ...state,
        colorCyan: action.payload.colorCyan
          ? action.payload.colorCyan
          : state.colorCyan,
      };
    case "change-color-blue":
      return {
        ...state,
        colorBlue: action.payload.colorBlue
          ? action.payload.colorBlue
          : state.colorBlue,
      };
    case "change-color-violet":
      return {
        ...state,
        colorViolet: action.payload.colorViolet
          ? action.payload.colorViolet
          : state.colorViolet,
      };
    case "change-color-magenta":
      return {
        ...state,
        colorMagenta: action.payload.colorMagenta
          ? action.payload.colorMagenta
          : state.colorMagenta,
      };
  }
  return state;
}

"use client";
import ColorTheme from "@/types/ColorTheme";
import { createContext } from "react";

const ColorThemeContext = createContext<ColorTheme>("default");

export default ColorThemeContext;

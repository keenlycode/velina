import { makeColorSpectrum } from "../../../function/color.js";

// Blue color
const oklch = {
  light: 0.55,
  chroma: 0.1736,
  hue: 257.76
}

export const spectrum = makeColorSpectrum(oklch);

export const palette = {
  blue: spectrum.c1,
  purple: spectrum.c2,

  light: "oklch(0.85 0.0042 91.45)",
  dark: "oklch(0.5 0.0248 301.42)"
};

const oklch = {
  light: 0.55,
  chroma: 0.1736,
  hue: 257.76
}

export const spectrum = {
  blue: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue})`,
  c1: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue})`,
  c2: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 30})`,
  c3: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 60})`,
  c4: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 90})`,
  c5: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 120})`,
  c6: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 150})`,
  c7: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 180})`,
  c8: `oklch(${oklch.light + 0.2} ${oklch.chroma + 0.2} ${oklch.hue + 210})`,
  c9: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 240})`,
  c10: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 270})`,
  c11: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 300})`,
  c12: `oklch(${oklch.light} ${oklch.chroma} ${oklch.hue + 330})`
}

export const palette = {
  blue: spectrum.blue,
  light: "oklch(0.85 0.0042 91.45)",
  dark: "oklch(0.5 0.0248 301.42)"
};

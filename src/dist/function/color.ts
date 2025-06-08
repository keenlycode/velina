import { css } from '../lib/adapter.bundle.js';
import {
  wcagContrast,
  formatCss,
  blend,
  filterBrightness,
} from '../lib/culori.bundle.js';

/**
 * Generates a set of gradient colors by rotating hue and optionally varying lightness/chroma.
 * @param base - Object with light, chroma, hue params (OKLCH)
 * @returns gradient object with keys c1..c12 etc
 */
export function makeColorSpectrum(base: { light: number, chroma: number, hue: number }) {
  const stops = 12;
  const step = 360/12;
  const color: Record<string, string> = {};

  for (let i = 0; i <= stops; i++) {
    const h = base.hue + step * (i - 1);
    color[`c${i}`] = `oklch(${base.light} ${base.chroma} ${h})`;
  }
  return color;
}

export function colorLighten(color: string, level: number) {
  return formatCss(
    filterBrightness(1.1, 'oklch')(
      blend([color, `rgba(255,255,255,${level})`])
    )
  )
}

export function colorDarken(color: string, level: number) {
  return formatCss(blend([color, `rgba(0,0,0,${level})`]))
}

export interface BgColorParam {
  color: string;
  textDark: string;
  textLight: string;
}

// export function bgColor({ bgColor, dark = '#000000', light = '#ffffff'} : BgColorArgs) {
export function bgColor(param: Partial<BgColorParam>) {
  let _param: BgColorParam = {
      color: '',
      textDark: '#000000',
      textLight: '#ffffff'
  }
  _param = {..._param, ...param}

  let textColor: string = _param.textDark;
  if (wcagContrast(_param.textDark, _param.color) < wcagContrast(_param.textLight, _param.color)) {
    textColor = _param.textLight;
  }
  return css`
    background-color: ${_param.color};
    color: ${textColor};
  `.trim();
}

export function bgLighten(level: number) {
  return css`
    filter: brightness(110%);
    background-image: linear-gradient(rgba(255,255,255,${level}), rgba(255,255,255,${level}));
    background-blend-mode: lighten;
  `.trim();
}

export function bgDarken(level: number) {
  return css`
    background-image: linear-gradient(rgba(0,0,0,${level}), rgba(0,0,0,${level}));
    background-blend-mode: darken;
  `.trim();
}

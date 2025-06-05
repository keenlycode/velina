import { css } from '../../lib/adapter.bundle.js';

export const fontFluid = ({
    vwMin = 400, vwMax = 1200,
    fontSizeMin = 12, fontSizeMax = 18
} = {}): string => {
    const slope = (fontSizeMax - fontSizeMin) / (vwMax - vwMin);
    const base = fontSizeMin - slope * vwMin;
    return css`font-size: clamp(${fontSizeMin}px, ${base}px + ${slope * 100}vw, ${fontSizeMax}px);`.trim();
}

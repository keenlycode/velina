import { css } from '../../../lib/adapter.bundle.js';

import {
  bgLighten,
  bgDarken,
  colorDarken,
} from '../../../function/color.js';

import {
  palette,
} from './color.js';


export const borderRadius = {
  sm: 'border-radius: 0.4rem;',
  md: 'border-radius: 0.8rem;',
  lg: 'border-radius: 1.2rem;'
};

const _borderColor = colorDarken(palette.light, 0.3);

export const border = {
  sm: `border: 1px solid ${_borderColor};`,
  md: `border: 2px solid ${_borderColor};`,
  lg: `border: 4px solid ${_borderColor};`
};

export const base = css`
  box-sizing: border-box;
`

export const flex = css`
  ${base}
  display: flex;
  flex-wrap: wrap;
`

export const inlineFlex = css`
  ${base}
  display: inline-flex;
  flex-wrap: wrap;
`

export const block = css`
  ${base}
  display: block;
`

export const inlineBlock = css`
  ${base}
  display: inline-block;
`

export const button = css`
  display: inline-flex;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  padding: 0.3em 0.5em;
  cursor: pointer;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 1em;
  user-select: none;
  background-color: ${palette.blue};
  &:hover {
    ${bgLighten(0.1)}
  }
  &:active {
    ${bgDarken(0.2)}
  }
`.trim()

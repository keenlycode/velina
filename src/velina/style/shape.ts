import { css } from '../../_lib/adapter.bundle.js';

import {
  bgColor,
  bgLighten,
  bgDarken,
  colorDarken,
  palette,
  gradient,
} from './color.js';

export const borderRadius = {
  sm: 'border-radius: 0.4rem;',
  md: 'border-radius: 0.8rem;',
  lg: 'border-radius: 1.2rem;'
};

const _borderColor = colorDarken(palette.light, 0.2);

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
  ${inlineFlex}
  ${borderRadius.sm}
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
  ${bgColor({ bgColor: gradient.blue })}
  &:hover {
    ${bgLighten(0.1)}
  }
  &:active {
    ${bgDarken(0.2)}
  }
`

interface BoxArrowParam {
  point: 'top' | 'right' | 'bottom' | 'left';
  position: string;
  arrowSize: string;
  bgColor: string;
  borderWidth: string;
  borderColor: string;
}

export function boxArrow(param: Partial<BoxArrowParam> = {}) {
  const _default: BoxArrowParam = {
    point: 'left',
    position: '50%',
    arrowSize: '10px',
    bgColor: 'blue',
    borderWidth: '5px',
    borderColor: '#c2e1f5'
  }
  param = { ..._default, ...param };
  let _css: string = css`
    position: relative;
    background: ${param.bgColor};\
    border: ${param.borderWidth} solid ${param.borderColor};\
    &::after, &::before {
      all: unset;
      border: solid transparent;
     	content: "";
     	height: 0;
     	width: 0;
     	position: absolute;
     	pointer-events: none;
    }
  `.trim();

  if (param.point === 'top') {
    _css += css`
      &::after, &::before {
        bottom: 100%;
        left: ${param.position};\
      }
      &::after {
        border-color: transparent;
        border-bottom-color: ${param.bgColor};\
        border-width: ${param.arrowSize};\
        margin-left: -${param.arrowSize};\
      }
      &::before {
        border-color: transparent;
        border-bottom-color: ${param.borderColor};\
        border-width: calc(${param.arrowSize} + 1.5*${param.borderWidth});
        margin-left: calc(-1 * (${param.arrowSize} + 1.5*${param.borderWidth}));
      }
    `.trim();
  } else if (param.point === 'right') {
    _css += css`
      &::after, &::before {
        left: 100%;
        top: ${param.position};\
      }
      &::after {
        border-color: transparent;
        border-left-color: ${param.bgColor};\
        border-width: ${param.arrowSize};\
        margin-top: -${param.arrowSize};\
      }
      &::before {
        border-color: transparent;
        border-left-color: ${param.borderColor};\
        border-width: calc(${param.arrowSize} + 1.5*${param.borderWidth});
        margin-top: calc(-1 * (${param.arrowSize} + 1.5*${param.borderWidth}));
      }
    `.trim();
  } else if (param.point === 'bottom') {
    _css += css`
      &::after, &::before {
        top: 100%;
        left: ${param.position};\
      }
      &::after {
        border-color: transparent;
        border-top-color: ${param.bgColor};\
        border-width: ${param.arrowSize};\
        margin-left: -${param.arrowSize};\
      }
      &::before {
        border-color: transparent;
        border-top-color: ${param.borderColor};\
        border-width: calc(${param.arrowSize} + 1.5*${param.borderWidth});\
        margin-left: calc(-1 * (${param.arrowSize} + 1.5*${param.borderWidth}));\
      }
    `.trim();
  } else if (param.point === 'left') {
    _css += css`
      &::after, &::before {
        right: 100%;
        top: ${param.position};\
      }
      &::after {
        border-color: transparent;
        border-right-color: ${param.bgColor};\
        border-width: ${param.arrowSize};\
        margin-top: -${param.arrowSize};\
      }
      &::before {
        border-color: transparent;
        border-right-color: ${param.borderColor};\
        border-width: calc(${param.arrowSize} + 1.5*${param.borderWidth});
        margin-top: calc(-1 * (${param.arrowSize} + 1.5*${param.borderWidth}));
      }
    `.trim();
  }

  return _css;
}

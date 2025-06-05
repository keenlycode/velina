import { css } from '../../lib/adapter.bundle.js';

interface LiftInteractionParam {
  el: HTMLElement;
  hover: string;
  click: string;
}

export function liftInteraction(param: LiftInteractionParam): string {
  return css`
    &:hover {
      transform: translateY(-${param.hover});
    }
    &:active {
      transform: translateY(-${param.click});
    }
  `.trim()
}

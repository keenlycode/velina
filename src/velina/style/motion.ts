import { Adapter } from "../../_lib/adapter.bundle.js";


export function liftInteraction(
  el: Adapter,
  hover: number = 1,
  click: number = 0
) {
  const hoverTranslate = `translateY(-${hover}px)`;
  const clickTranslate = `translateY(-${click}px)`;
}

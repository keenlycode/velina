import { Adapter, css } from '../../../lib/adapter.bundle.js';


class Base extends Adapter {}
Base.css = css`
  margin: auto;
  box-sizing: border-box;
`;

export class Block extends Base {};
Block.css = css`
  display: block;
`

export class BlockInline extends Base {};
BlockInline.css = css`
  display: inline-block;
`

export class Flex extends Base {};
Flex.css = css`
  display: flex;
  flex-wrap: wrap;
`

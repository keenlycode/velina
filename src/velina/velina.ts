import type { Adapter } from './lib/adapter.bundle.js';

export class Velina {
  el: Adapter | (new () => Adapter);
  constructor(el: Adapter) {
    this.el = el;
  }

  css() {

  }
}

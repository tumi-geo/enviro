import {
  i
} from "./chunk-PUBWKCWE.js";
import {
  h2 as h
} from "./chunk-WFYAWILE.js";
import {
  E,
  R
} from "./chunk-QMX5U76G.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
var a2 = class extends i {
  get hasHighlight() {
    return this.children.some(((r2) => r2.hasData));
  }
  renderChildren(r2) {
    this.attributeView.update(), r2.drawPhase === E.HIGHLIGHT && this.children.some(((r3) => r3.hasData)) && (super.renderChildren(r2), r2.context.setColorMask(true, true, true, true), h(r2, false, ((r3) => {
      this._renderChildren(r3, R.Highlight);
    })));
  }
};
a2 = r([a("esri.views.2d.layers.graphics.HighlightGraphicContainer")], a2);

export {
  a2 as a
};
//# sourceMappingURL=chunk-SAWE7PZB.js.map

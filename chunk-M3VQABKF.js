import {
  t
} from "./chunk-GI6WJJKW.js";
import {
  Rt,
  h
} from "./chunk-5BPHOAZS.js";
import {
  E2 as E,
  n
} from "./chunk-2NCKIQAU.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js
var r = class extends t {
  constructor({ lineStart: e, lineEnd: r2, targetPoint: o, isDraped: a }) {
    super(o, new Rt(e, r2), a, E.SELF), this._referenceLineHint = new n(h.REFERENCE_EXTENSION, e, r2, a, this.domain);
  }
  get hints() {
    return [this._referenceLineHint, new n(h.TARGET, this._lineEndClosestToTarget(), this.targetPoint, this.isDraped, this.domain)];
  }
  _lineEndClosestToTarget() {
    return this.constraint.closestEndTo(this.targetPoint);
  }
};

export {
  r
};
//# sourceMappingURL=chunk-M3VQABKF.js.map

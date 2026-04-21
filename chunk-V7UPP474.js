import {
  t
} from "./chunk-GI6WJJKW.js";
import {
  Lt,
  h
} from "./chunk-5BPHOAZS.js";
import {
  E2 as E,
  n
} from "./chunk-2NCKIQAU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js
var n2 = class extends t {
  constructor({ targetPoint: o, objectId: n3, constraint: r2, isDraped: i }) {
    super(o, r2, i, E.FEATURE), this.objectId = n3;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), { constraint: new Lt(n3.edgeStart, n3.edgeEnd) }));
  }
  get hints() {
    return [new n(h.REFERENCE, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  n2 as n,
  r
};
//# sourceMappingURL=chunk-V7UPP474.js.map

import {
  n as n2
} from "./chunk-V7UPP474.js";
import {
  Ut,
  h
} from "./chunk-5BPHOAZS.js";
import {
  n
} from "./chunk-2NCKIQAU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), { isDraped: true, constraint: new Ut(n3.edgeStart, n3.edgeEnd, n3.getGroundElevation) }));
  }
  get hints() {
    return [new n(h.REFERENCE, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-Z3ZMR5D4.js.map

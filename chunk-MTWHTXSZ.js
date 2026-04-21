import {
  n
} from "./chunk-HNYFX443.js";
import {
  n as n2
} from "./chunk-V7UPP474.js";
import {
  gt
} from "./chunk-5BPHOAZS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), { constraint: new gt(n3.targetPoint) }));
  }
  get hints() {
    return [new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-MTWHTXSZ.js.map

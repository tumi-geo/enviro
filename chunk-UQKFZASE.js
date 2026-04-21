import {
  o
} from "./chunk-2OMOKVI7.js";
import {
  t
} from "./chunk-GI6WJJKW.js";
import {
  gt
} from "./chunk-5BPHOAZS.js";
import {
  E2 as E
} from "./chunk-2NCKIQAU.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/IntersectionSnappingCandidate.js
var r = class extends t {
  constructor(s, n, r2, o2) {
    super(s, new gt(s), o2, E.ALL), this.first = n, this.second = r2;
  }
  get hints() {
    return this.first.targetPoint = this.targetPoint, this.second.targetPoint = this.targetPoint, [...this.first.hints, ...this.second.hints, new o(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-UQKFZASE.js.map

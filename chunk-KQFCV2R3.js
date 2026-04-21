import {
  E,
  p
} from "./chunk-7EBZ666S.js";
import {
  t
} from "./chunk-VY2R5MU5.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectTarget.js
var t2 = class {
  constructor(t3, e, i2) {
    this.object = t3, this.geometryId = e, this.primitiveIndex = i2;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js
var c = class extends p {
  constructor() {
    super(...arguments), this.intersector = E.HUD;
  }
};
var i = class extends t2 {
  constructor(r, e) {
    super(r.object, r.geometryId, r.primitiveIndex), this.center = t(e);
  }
};

export {
  c,
  i
};
//# sourceMappingURL=chunk-KQFCV2R3.js.map

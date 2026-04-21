import {
  I,
  L,
  Q
} from "./chunk-STW7Q3CK.js";
import {
  o
} from "./chunk-BWFTAJDA.js";
import {
  n
} from "./chunk-VY2R5MU5.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
function i(e, o2, i2, c2) {
  if (L(e.spatialReference, i2)) {
    f[0] = e.x, f[1] = e.y;
    const r = e.z;
    return f[2] = r ?? c2 ?? 0, o(f, e.spatialReference, 0, o2, i2, 0);
  }
  const s = I(e, i2);
  return !!s && (o2[0] = s?.x, o2[1] = s?.y, o2[2] = s?.z ?? c2 ?? 0, true);
}
function c(e, r, t, n2, c2) {
  return __async(this, null, function* () {
    return yield Q(e.spatialReference, t, null, c2), i(e, r, t, n2);
  });
}
var f = n();

export {
  i,
  c
};
//# sourceMappingURL=chunk-YVKWL3MD.js.map

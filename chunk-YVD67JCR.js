import {
  B
} from "./chunk-Y43YHFY6.js";
import {
  i
} from "./chunk-DRZL4WTP.js";
import {
  o
} from "./chunk-BWFTAJDA.js";
import {
  s
} from "./chunk-3MFXKT2T.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js
function n(n2, i2) {
  const p = B(n2, i.absolute);
  if (!p) return null;
  let s2 = p.position;
  return s(n2.spatialReference, i2) || (s2 = new Float64Array(p.position.length), o(p.position, n2.spatialReference, 0, s2, i2, 0)) ? s2 : null;
}

export {
  n
};
//# sourceMappingURL=chunk-YVD67JCR.js.map

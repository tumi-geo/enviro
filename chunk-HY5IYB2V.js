import {
  c,
  i
} from "./chunk-5F5MRPE2.js";
import {
  G,
  _,
  r
} from "./chunk-Z33DWCSN.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/support/geographicTransformationUtils.js
var s;
var i2;
var a;
var c2;
function p() {
  return !!s && r();
}
function m() {
  return __async(this, null, function* () {
    if (!p()) {
      const [t, e, r2, p2] = yield Promise.all([import("./chunk-2GQWGQLL.js"), import("./chunk-BB7UJJJU.js").then(((n) => n.aK)).then((({ queryTransformationList: n }) => n)), import("./chunk-BB7UJJJU.js").then(((n) => n.aG)).then((({ injectPe: n }) => n)), import("./chunk-OPCP4SZK.js"), _()]);
      c2 = t.Envelope2D.constructEmpty(), s = e, r2(G), i2 = p2.fromExtent, a = p2.fromSpatialReference;
    }
  });
}
function u(n, t, o = null) {
  const e = o ? i2(o).asEnvelope2D() : c2, r2 = s(0, a(n), a(t), e, 1, true);
  return r2.length > 0 ? l(r2[0]) : null;
}
function f(n, t, o = null) {
  const e = o ? i2(o).asEnvelope2D() : c2;
  return s(0, a(n), a(t), e, 0, true).map(((n2) => l(n2)));
}
function l(n) {
  const t = new c();
  for (let o = 0; o < n.count(); o++) {
    const e = n.getStep(o);
    t.steps.push(new i({ wkid: e.getID(), isInverse: e.isInverted() }));
  }
  return t;
}
export {
  u as getTransformation,
  f as getTransformations,
  p as isLoaded,
  m as load
};
//# sourceMappingURL=chunk-HY5IYB2V.js.map

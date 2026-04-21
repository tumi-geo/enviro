import {
  c
} from "./chunk-7O25E3Z7.js";
import {
  p,
  u
} from "./chunk-I2QGHF2M.js";
import {
  n
} from "./chunk-VY2R5MU5.js";
import "./chunk-5NWNFL2J.js";
import {
  e
} from "./chunk-KHKWAA5Q.js";
import "./chunk-Z43IMVPB.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = a();
function a() {
  return new e(50);
}
function u2() {
  c2 = a();
}
function l(e2, o) {
  return __async(this, null, function* () {
    if (e2.resource?.href) return m(e2.resource.href).then(((e3) => [e3.width, e3.height]));
    if (e2.resource?.primitive) return null != o ? [o, o] : [256, 256];
    throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
  });
}
function m(r) {
  return H(r, { responseType: "image" }).then(((e2) => e2.data));
}
function f(e2, o = null) {
  return __async(this, null, function* () {
    if (!e2.isPrimitive) {
      const o2 = e2.resource?.href;
      if (!o2) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
      const s2 = c2.get(o2);
      if (void 0 !== s2) return s2;
      const { fetch: n2 } = yield import("./chunk-JZ5D5EO7.js"), a3 = yield n2(o2, { disableTextures: true, spherical: true }), u3 = p(a3.referenceBoundingBox, n());
      return c2.put(o2, u3), u3;
    }
    if (!e2.resource?.primitive) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const a2 = u(c(e2.resource.primitive));
    if (null != o) for (let r = 0; r < a2.length; r++) a2[r] *= o;
    return p(a2, n());
  });
}
export {
  u2 as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f as computeObjectLayerResourceSize
};
//# sourceMappingURL=chunk-MTUGIFFL.js.map

import {
  u
} from "./chunk-GJBLIZJ6.js";
import {
  has
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var t = class {
  constructor(t2) {
    this.data = t2, this.type = "encoded-mesh-texture", this.encoding = u.KTX2_ENCODING;
  }
};
function n(e) {
  return "encoded-mesh-texture" === e?.type;
}
function r(e) {
  return __async(this, null, function* () {
    const t2 = new Blob([e]), n2 = yield t2.text();
    return JSON.parse(n2);
  });
}
function o(n2, r2) {
  return __async(this, null, function* () {
    if (r2 === u.KTX2_ENCODING) return new t(n2);
    const o2 = new Blob([n2], { type: r2 });
    let c = URL.createObjectURL(o2);
    switch (r2) {
      case "image/jpeg":
        c += "#.jpg";
        break;
      case "image/png":
        c += "#.png";
    }
    const s = new Image();
    if (has("esri-iPhone")) return new Promise(((e, t2) => {
      const n3 = () => {
        o3(), e(s);
      }, r3 = (e2) => {
        o3(), t2(e2);
      }, o3 = () => {
        URL.revokeObjectURL(c), s.removeEventListener("load", n3), s.removeEventListener("error", r3);
      };
      s.addEventListener("load", n3), s.addEventListener("error", r3), s.src = c;
    }));
    try {
      s.src = c, yield s.decode();
    } catch (a) {
      console.warn("Failed decoding HTMLImageElement");
    }
    return URL.revokeObjectURL(c), s;
  });
}

export {
  t,
  n,
  r,
  o
};
//# sourceMappingURL=chunk-XQEDALQO.js.map

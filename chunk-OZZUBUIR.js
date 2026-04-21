import {
  t
} from "./chunk-JP5Q7LLG.js";
import {
  e
} from "./chunk-FID6PTKL.js";
import "./chunk-2JXAQB6C.js";
import {
  u
} from "./chunk-ML2Q6ZHW.js";
import "./chunk-XORXELZL.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-UMW5MZI7.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js
function o(e2, i, o2) {
  return __async(this, null, function* () {
    const r = e2.thumbnail?.url;
    if (r) {
      const e3 = s((yield H(r, { responseType: "image" })).data, o2);
      return o2?.node ? (o2.node.appendChild(e3), o2.node) : e3;
    }
    const a = yield e2.fetchSymbol({ acceptedFormats: e });
    return a ? i(a, o2) : null;
  });
}
function s(t2, n) {
  const o2 = !/\\.svg$/i.test(t2.src) && n?.disableUpsampling, s2 = Math.max(t2.width, t2.height);
  let r = null != n?.maxSize ? u(n.maxSize) : t.maxSize;
  o2 && (r = Math.min(s2, r));
  const a = "number" == typeof n?.size ? n?.size : null, h = Math.min(r, null != a ? u(a) : s2);
  if (h !== s2) {
    const e2 = 0 !== t2.width && 0 !== t2.height ? t2.width / t2.height : 1;
    e2 >= 1 ? (t2.width = h, t2.height = h / e2) : (t2.width = h * e2, t2.height = h);
  }
  return t2;
}
export {
  o as previewWebStyleSymbol
};
//# sourceMappingURL=chunk-OZZUBUIR.js.map

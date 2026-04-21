import {
  f,
  s as s2,
  u
} from "./chunk-OXEAULCD.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js
function e(e2, n, m, a) {
  return __async(this, null, function* () {
    if (!n) throw new s("post:missing-guid", "guid for version is missing");
    const u2 = f(e2), d = m.toJSON(), f2 = s2(u2.query, __spreadProps(__spreadValues({ query: u(__spreadProps(__spreadValues({}, d), { f: "json" })) }, a), { method: "post" }));
    n.startsWith("{") && (n = n.slice(1, -1));
    const p = `${u2.path}/versions/${n}/deleteForwardEdits`, { data: c } = yield H(p, f2);
    return c;
  });
}
export {
  e as deleteForwardEdits
};
//# sourceMappingURL=chunk-6DUHKTLY.js.map

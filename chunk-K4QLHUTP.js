import {
  _,
  p as p2
} from "./chunk-GUUR524U.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import {
  p
} from "./chunk-3DPIVMX6.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/core/loadAll.js
function t(o, l) {
  return __async(this, null, function* () {
    return yield o.load(), a(o, l);
  });
}
function a(t2, a2) {
  return __async(this, null, function* () {
    const s = [], c = (...o) => {
      for (const l of o) null != l && (Array.isArray(l) ? c(...l) : V.isCollection(l) ? l.forEach(((o2) => c(o2))) : p.isLoadable(l) && s.push(l));
    };
    a2(c);
    let f = null;
    if (yield p2(s, ((o) => __async(null, null, function* () {
      const n = yield _(i(o) ? o.loadAll() : o.load());
      false !== n.ok || f || (f = n);
    }))), f) throw f.error;
    return t2;
  });
}
function i(o) {
  return "loadAll" in o && "function" == typeof o.loadAll;
}

export {
  t,
  a
};
//# sourceMappingURL=chunk-K4QLHUTP.js.map

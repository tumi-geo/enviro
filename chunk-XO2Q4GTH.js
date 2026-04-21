import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/webdoc/support/saveUtils.js
function o(e) {
  return __async(this, null, function* () {
    const r = [];
    for (const o2 of e.allLayers) if ("beforeSave" in o2 && "function" == typeof o2.beforeSave) {
      const e2 = o2.beforeSave();
      e2 && r.push(e2);
    }
    yield Promise.allSettled(r);
  });
}
var t = /* @__PURE__ */ new Set(["layer:unsupported", "property:unsupported", "symbol:unsupported", "symbol-layer:unsupported", "url:unsupported"]);
function s2(r, o2, s3) {
  let n = (r.messages ?? []).filter((({ type: e }) => "error" === e)).map((({ name: r2, message: o3, details: t2 }) => new s(r2, o3, t2)));
  if (r.blockedRelativeUrls && (n = n.concat(r.blockedRelativeUrls.map(((r2) => new s("url:unsupported", `Relative url '${r2}' is not supported`))))), s3) {
    const { ignoreUnsupported: e, supplementalUnsupportedErrors: r2 = [], requiredPropertyChecksDisabled: o3 } = s3;
    e && (n = n.filter((({ name: e2 }) => !(t.has(e2) || r2.includes(e2))))), o3 && (n = n.filter(((e2) => "web-document-write:property-required" !== e2.name)));
  }
  if (n.length > 0) throw new s(o2.errorName, "Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: n });
}

export {
  o,
  s2 as s
};
//# sourceMappingURL=chunk-XO2Q4GTH.js.map

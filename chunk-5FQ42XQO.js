import {
  c,
  f
} from "./chunk-63ZLUZJU.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  s
} from "./chunk-OX6HQ7WO.js";
import {
  h
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var i = class {
  constructor(s2, t, e) {
    this.assetName = s2, this.assetMimeType = t, this.parts = e;
  }
  equals(s2) {
    return this === s2 || this.assetName === s2.assetName && this.assetMimeType === s2.assetMimeType && h(this.parts, s2.parts, ((s3, t) => s3.equals(t)));
  }
  isOnService(s2) {
    return this.parts.every(((t) => t.isOnService(s2)));
  }
  makeHash() {
    let s2 = "";
    for (const t of this.parts) s2 += t.partHash;
    return s2;
  }
  toBlob(s2) {
    return __async(this, null, function* () {
      const { parts: t } = this;
      if (1 === t.length) return t[0].toBlob(s2);
      const r = yield Promise.all(t.map(((t2) => t2.toBlob(s2))));
      return s(s2), new Blob(r);
    });
  }
};
var n = class {
  constructor(s2, t) {
    this.partUrl = s2, this.partHash = t;
  }
  equals(s2) {
    return this === s2 || this.partUrl === s2.partUrl && this.partHash === s2.partHash;
  }
  isOnService(s2) {
    return this.partUrl.startsWith(`${s2.path}/assets/`);
  }
  toBlob(t) {
    return __async(this, null, function* () {
      const { data: r } = yield H(this.partUrl, { responseType: "blob" });
      return s(t), r;
    });
  }
};
function o(s2) {
  return l(s2?.source);
}
var c2 = /^(model\/gltf\+json)|(model\/gltf-binary)$/;
var u = /\.(gltf|glb)/i;
function l(s2) {
  switch (s2?.type) {
    case "client":
      return Array.isArray(s2.files) ? s2.files.some(p) : p(s2.files);
    case "service":
      return s2.assets.some(p);
    case "loadable":
      return true;
    default:
      return false;
  }
}
function p(s2) {
  if (s2 instanceof File) {
    const { type: t, name: e } = s2;
    return c2.test(t) || u.test(e);
  }
  return c2.test(s2.assetMimeType) || u.test(s2.assetName);
}
function f2(s2, t) {
  if (!s2) return false;
  const { source: e } = s2;
  return h2(e, t);
}
function m(s2, t) {
  if (s2 === t) return true;
  const { source: e } = s2, { source: r } = t;
  if (e === r) return true;
  if ("service" === e.type && "service" === r.type) {
    if (e.assets.length !== r.assets.length) return false;
    const s3 = (s4, t3) => s4.assetName < t3.assetName ? -1 : s4.assetName > t3.assetName ? 1 : 0, t2 = [...e.assets].sort(s3), a = [...r.assets].sort(s3);
    for (let e2 = 0; e2 < t2.length; ++e2) if (!t2[e2].equals(a[e2])) return false;
    return true;
  }
  return false;
}
function h2(s2, t) {
  return "service" === s2.type && s2.assets.every(((s3) => s3.isOnService(t)));
}
function y(s2, t) {
  return s2 instanceof File ? c(s2, t) : f(s2.assetMimeType, s2.assetName, t);
}
function b(s2) {
  switch (s2.type) {
    case "client":
      return Array.isArray(s2.files) ? s2.files : [s2.files];
    case "service":
      return s2.assets;
    case "loadable":
      return;
  }
}
function v(s2) {
  return !!s2.original;
}

export {
  i,
  n,
  o,
  f2 as f,
  m,
  y,
  b,
  v
};
//# sourceMappingURL=chunk-5FQ42XQO.js.map

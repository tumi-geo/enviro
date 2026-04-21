import {
  i as i3,
  n as n2
} from "./chunk-ZXGT37TP.js";
import {
  q
} from "./chunk-MXW5JHKB.js";
import "./chunk-3YSOPGS6.js";
import {
  i as i2,
  n
} from "./chunk-5FQ42XQO.js";
import "./chunk-GG2JPCCX.js";
import "./chunk-VXZO5RHI.js";
import "./chunk-BAS24CHE.js";
import "./chunk-ZPRQ3CNR.js";
import "./chunk-VVGDGEK6.js";
import "./chunk-PU5BSLV5.js";
import "./chunk-RSRGHKBV.js";
import "./chunk-BPQG72PU.js";
import "./chunk-WAKNM5QU.js";
import "./chunk-Y43YHFY6.js";
import "./chunk-ITAZ5PY2.js";
import "./chunk-DXBXCRYC.js";
import "./chunk-47YOCG5C.js";
import "./chunk-MCAE2U2N.js";
import "./chunk-DRZL4WTP.js";
import "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import "./chunk-BU754T7B.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-7EVA2PHC.js";
import "./chunk-GNCPI2AX.js";
import {
  g
} from "./chunk-H4CURCSO.js";
import {
  s
} from "./chunk-63ZLUZJU.js";
import {
  d
} from "./chunk-T4V6OAUU.js";
import "./chunk-5QTM7DAF.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-CMVANBEN.js";
import "./chunk-PPYJGQC2.js";
import "./chunk-6YN6I5ZM.js";
import "./chunk-7O25E3Z7.js";
import "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-JBWJWCIU.js";
import "./chunk-66I5P6AF.js";
import "./chunk-IB63APHQ.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-YVKWL3MD.js";
import "./chunk-AKEOA7WV.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import {
  u
} from "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  i3 as i
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/support/meshFeatureSet.js
var p = () => i.getLogger("esri.rest.support.meshFeatureSet");
function l(t, r, s2) {
  const o = s2.features;
  s2.features = [], delete s2.geometryType;
  const a = g.fromJSON(s2);
  if (a.geometryType = "mesh", !s2.assetMaps) return a;
  const u2 = g2(r, s2.assetMaps), i4 = t.sourceSpatialReference ?? f.WGS84, c = s2.globalIdFieldName, { outFields: m } = t, p2 = null != m && m.length > 0 ? y(m.includes("*") ? null : new Set(m)) : () => ({});
  for (const n3 of o) {
    const t2 = E(n3, c, i4, r, u2);
    a.features.push(new d({ geometry: t2, attributes: p2(n3) }));
  }
  return a;
}
function y(e) {
  return ({ attributes: t }) => {
    if (!t) return {};
    if (!e) return t;
    for (const r in t) e.has(r) || delete t[r];
    return t;
  };
}
function E(e, t, r, n3, a) {
  const u2 = e.attributes[t], i4 = a.get(u2);
  if (null == i4 || !e.geometry) return null;
  const f2 = n2(e.attributes, r, n3.transformFieldRoles), p2 = z.fromJSON(e.geometry);
  p2.spatialReference = r;
  const l2 = i3(e.attributes, n3.transformFieldRoles), y2 = r.isGeographic ? "local" : "georeferenced", E2 = d2(i4);
  return E2 ? q.createWithExternalSource(f2, E2, { extent: p2, transform: l2, vertexSpace: y2, unitConversionDisabled: true }) : q.createIncomplete(f2, { extent: p2, transform: l2, vertexSpace: y2 });
}
var h;
function g2(e, t) {
  const s2 = /* @__PURE__ */ new Map();
  for (const o of t) {
    const t2 = o.parentGlobalId;
    if (null == t2) continue;
    const n3 = o.assetName, a = o.assetType, u2 = o.assetHash, f2 = o.assetURL, c = o.conversionStatus, m = o.seqNo, l2 = s(a, e.supportedFormats);
    if (!l2) {
      p().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a}, but it does not list it as a supported type`);
      continue;
    }
    const y2 = u(s2, t2, (() => ({ files: /* @__PURE__ */ new Map() })));
    u(y2.files, n3, (() => ({ name: n3, type: a, mimeType: l2, status: S(c), parts: [] }))).parts[m] = { hash: u2, url: f2 };
  }
  return s2;
}
function d2(e) {
  const t = Array.from(e.files.values()), r = new Array();
  for (const s2 of t) {
    if (s2.status !== h.COMPLETED) return null;
    const e2 = new Array();
    for (const t2 of s2.parts) {
      if (!t2) return null;
      e2.push(new n(t2.url, t2.hash));
    }
    r.push(new i2(s2.name, s2.mimeType, e2));
  }
  return { type: "service", assets: r };
}
function S(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return h.COMPLETED;
    case "INPROGRESS":
      return h.PENDING;
    default:
      return h.FAILED;
  }
}
!(function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
})(h || (h = {}));
export {
  g2 as assetMapFromAssetMapsJSON,
  E as extractMesh,
  l as meshFeatureSetFromJSON
};
//# sourceMappingURL=chunk-3PVVGB5H.js.map

import {
  B
} from "./chunk-Y43YHFY6.js";
import "./chunk-ITAZ5PY2.js";
import "./chunk-DXBXCRYC.js";
import "./chunk-47YOCG5C.js";
import "./chunk-MCAE2U2N.js";
import {
  i
} from "./chunk-DRZL4WTP.js";
import "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import {
  s
} from "./chunk-WTMJWKT2.js";
import "./chunk-YVKWL3MD.js";
import "./chunk-AKEOA7WV.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-H4665WKA.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
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
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import {
  has
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js
var n = class {
  createIndex(t, r) {
    return __async(this, null, function* () {
      const n2 = new Array();
      if (!t.vertexAttributes?.position) return new s();
      const o2 = a(t), s3 = null != r ? yield r.invoke("createIndexThread", o2, { transferList: n2 }) : this.createIndexThread(o2).result;
      return i2().fromJSON(s3);
    });
  }
  createIndexThread(e) {
    const t = i2();
    if (!e) return { result: t.toJSON() };
    const r = new Float64Array(e.position);
    return e.components ? s2(t, r, e.components.map(((e2) => new Uint32Array(e2)))) : o(t, r);
  }
};
function o(e, t) {
  const r = new Array(t.length / 9);
  let n2 = 0;
  for (let o2 = 0; o2 < t.length; o2 += 9) r[n2++] = c(t, o2, o2 + 3, o2 + 6);
  return e.load(r), { result: e.toJSON() };
}
function s2(e, t, r) {
  let n2 = 0;
  for (const a2 of r) n2 += a2.length / 3;
  const o2 = new Array(n2);
  let s3 = 0;
  for (const a2 of r) for (let e2 = 0; e2 < a2.length; e2 += 3) o2[s3++] = c(t, 3 * a2[e2], 3 * a2[e2 + 1], 3 * a2[e2 + 2]);
  return e.load(o2), { result: e.toJSON() };
}
function a(e) {
  const { vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 } = e, i3 = B({ vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 }, i.absolute, { allowBufferReuse: true })?.position;
  return i3 ? !e.components || e.components.some(((e2) => !e2.faces)) ? { position: i3.buffer } : { position: i3.buffer, components: e.components.map(((e2) => e2.faces)) } : null;
}
function i2() {
  return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
}
function c(e, t, r, n2) {
  return { minX: Math.min(e[t], e[r], e[n2]), maxX: Math.max(e[t], e[r], e[n2]), minY: Math.min(e[t + 1], e[r + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[n2 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[n2], e[n2 + 1], e[n2 + 2]] };
}
export {
  n as default
};
//# sourceMappingURL=chunk-D2FJH3DA.js.map

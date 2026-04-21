import {
  e
} from "./chunk-5J2BBAHA.js";
import {
  u
} from "./chunk-K7LJTNYU.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js
var e2;
var r;
function n(t) {
  return __async(this, null, function* () {
    yield o();
    const e3 = { status: u.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [] };
    if (t.inputs.length < 1) return { result: e3, transferList: [] };
    const n2 = { ptrs: [], sizes: [] };
    for (const s of t.inputs) {
      const t2 = r._malloc(s.byteLength);
      new Uint8Array(r.HEAPU8.buffer, t2, s.byteLength).set(new Uint8Array(s)), n2.ptrs.push(t2), n2.sizes.push(s.byteLength);
    }
    const i2 = r.process(t.jobDescJson, t.id, n2, t.isMissingResourceCase);
    e3.status = i2.status, e3.missingInputUrls = i2.missingInputUrls.slice();
    const u2 = i2.status === u.Succeeded && i2.data, l = e3.status === u.MissingInputs && e3.missingInputUrls.length > 0;
    e3.jobDescJson = i2.jobDescJson.slice(), e3.error = i2.error.slice(), u2 ? e3.data = i2.data.slice() : l && (e3.originalInputs = t.inputs.slice());
    for (let s = 0; s < n2.ptrs.length; ++s) r._free(n2.ptrs[s]);
    const a = [];
    if (u2) a.push(e3.data.buffer);
    else if (l) for (const s of t.inputs) a.push(s);
    return { result: e3, transferList: a };
  });
}
function i() {
  r && (r.uninitialize_lyr3d_worker_wasm(), r = null);
}
function o() {
  return r ? Promise.resolve() : (e2 || (e2 = e().then(((s) => {
    r = s, r.initialize_lyr3d_worker_wasm(), e2 = null;
  }))), e2);
}
export {
  i as destroyWasm,
  o as initialize,
  n as process
};
//# sourceMappingURL=chunk-R3CDC4HV.js.map

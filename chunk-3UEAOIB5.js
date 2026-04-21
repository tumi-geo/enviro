import {
  u
} from "./chunk-EXLCW3WT.js";
import {
  E,
  d,
  f,
  g,
  p,
  u as u2
} from "./chunk-JR5QXMYP.js";
import "./chunk-QFKNOMU7.js";
import "./chunk-UWGRB6MP.js";
import "./chunk-MIVT6TAB.js";
import "./chunk-CQ25WBTL.js";
import "./chunk-4PDLXIV3.js";
import "./chunk-CTUUCM6Q.js";
import "./chunk-BPQG72PU.js";
import "./chunk-WAKNM5QU.js";
import "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import "./chunk-XY257PCG.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
var o = class {
  extract(e) {
    return __async(this, null, function* () {
      const t = c(e), n = f(t), r = [t.data.buffer];
      return { result: u3(n, r), transferList: r };
    });
  }
  extractComponentsEdgeLocations(t) {
    return __async(this, null, function* () {
      const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, p2), o2 = [];
      return { result: u(a.regular.instancesData, o2), transferList: o2 };
    });
  }
  extractEdgeLocations(t) {
    return __async(this, null, function* () {
      const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, f2), o2 = [];
      return { result: u(a.regular.instancesData, o2), transferList: o2 };
    });
  }
};
function c(e) {
  return { data: E.createView(e.dataBuffer), indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function u3(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: u(t.regular.instancesData, n), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: u(t.silhouette.instancesData, n), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
var l = class {
  allocate(e) {
    return d.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1);
  }
};
var d2 = class {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1), e.componentIndex.set(t, n.componentIndex);
  }
};
var f2 = new l();
var p2 = new d2();
export {
  o as default
};
//# sourceMappingURL=chunk-3UEAOIB5.js.map

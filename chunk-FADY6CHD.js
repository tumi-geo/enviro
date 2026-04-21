import {
  d
} from "./chunk-QSYD2ICX.js";
import {
  t as t2
} from "./chunk-KKXUY5OH.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import {
  H,
  t
} from "./chunk-CDTLZWCX.js";
import {
  k
} from "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/query/operations/queryAttachments.js
function s(t3) {
  const o = t3.toJSON();
  return o.attachmentTypes && (o.attachmentTypes = o.attachmentTypes.join(",")), o.keywords && (o.keywords = o.keywords.join(",")), o.globalIds && (o.globalIds = o.globalIds.join(",")), o.objectIds && (o.objectIds = o.objectIds.join(",")), o.size && (o.size = o.size.join(",")), o.orderByFields && (o.orderByFields = o.orderByFields.join(",")), o;
}
function a(o, r) {
  const s2 = {};
  for (const a2 of r) {
    const { parentObjectId: r2, parentGlobalId: c2, attachmentInfos: i2 } = a2;
    for (const a3 of i2) {
      const { id: i3 } = a3, d2 = k(t(`${o.path}/${r2}/attachments/${i3}`)), m = d.fromJSON(a3);
      m.set({ url: d2, parentObjectId: r2, parentGlobalId: c2 }), s2[r2] ? s2[r2].push(m) : s2[r2] = [m];
    }
  }
  return s2;
}
function c(t3, e, n) {
  let a2 = { query: t2(__spreadValues(__spreadProps(__spreadValues({}, t3.query), { f: "json" }), s(e))) };
  return n && (a2 = __spreadProps(__spreadValues(__spreadValues({}, n), a2), { query: __spreadValues(__spreadValues({}, n.query), a2.query) })), H(t3.path + "/queryAttachments", a2).then(((t4) => t4.data.attachmentGroups));
}
function i(t3, e, r) {
  return __async(this, null, function* () {
    const { objectIds: n } = e, s2 = [];
    for (const a2 of n) s2.push(H(t3.path + "/" + a2 + "/attachments", r));
    return Promise.all(s2).then(((t4) => n.map(((o, e2) => ({ parentObjectId: o, attachmentInfos: t4[e2].data.attachmentInfos })))));
  });
}
export {
  c as executeAttachmentQuery,
  i as fetchAttachments,
  a as processAttachmentQueryResult
};
//# sourceMappingURL=chunk-FADY6CHD.js.map

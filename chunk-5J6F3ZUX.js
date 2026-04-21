import {
  _
} from "./chunk-GUUR524U.js";
import {
  s as s2
} from "./chunk-LJ6UKSKZ.js";
import {
  s
} from "./chunk-OX6HQ7WO.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/renderers/support/styleUtils.js
function t(t2, i, n) {
  return __async(this, null, function* () {
    const s3 = t2 && t2.getAtOrigin && t2.getAtOrigin("renderer", i.origin);
    if (s3 && "unique-value" === s3.type && s3.styleOrigin) {
      const a = yield _(s3.populateFromStyle());
      if (s(n), false === a.ok) {
        const e = a.error;
        i?.messages && i.messages.push(new s2("renderer:style-reference", `Failed to create unique value renderer from style reference: ${e.message}`, { error: e, context: i })), t2.clear("renderer", i?.origin);
      }
    }
  });
}

export {
  t
};
//# sourceMappingURL=chunk-5J6F3ZUX.js.map

import {
  l
} from "./chunk-7ZUHIRNS.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  o
} from "./chunk-BS2W7XFZ.js";

// node_modules/@arcgis/core/rest/support/GPMessage.js
var p = new o({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
var i = class extends l {
  constructor(e) {
    super(e), this.description = null, this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], i.prototype, "description", void 0), r([m({ type: String, json: { read: p.read, write: p.write } })], i.prototype, "type", void 0), i = r([a("esri.rest.support.GPMessage")], i);
var a2 = i;

export {
  a2 as a
};
//# sourceMappingURL=chunk-WASIMD2O.js.map

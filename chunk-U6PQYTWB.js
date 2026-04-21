import {
  a as a3,
  m as m2,
  v
} from "./chunk-VIVQK4Y5.js";
import {
  r as r2
} from "./chunk-6QXOVETH.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  a
} from "./chunk-EQ4FTM7V.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/renderers/SimpleRenderer.js
var c;
var m3 = c = class extends v(a3) {
  constructor(e) {
    super(e), this.description = null, this.label = null, this.symbol = null, this.type = "simple";
  }
  collectRequiredFields(e, s) {
    return __async(this, null, function* () {
      yield Promise.all([this.collectSymbolFields(e, s), this.collectVVRequiredFields(e, s)]);
    });
  }
  collectSymbolFields(e, s) {
    return __async(this, null, function* () {
      yield Promise.all(this.symbols.map(((r3) => r3.collectRequiredFields(e, s))));
    });
  }
  getSymbol(e, s) {
    return this.symbol;
  }
  getSymbolAsync(e, s) {
    return __async(this, null, function* () {
      return this.symbol;
    });
  }
  get symbols() {
    return this.symbol ? [this.symbol] : [];
  }
  getAttributeHash() {
    return this.visualVariables?.reduce(((e, s) => e + s.getAttributeHash()), "") ?? "";
  }
  getMeshHash() {
    return this.symbols.reduce(((e, s) => e + JSON.stringify(s)), "");
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables;
  }
  clone() {
    return new c({ description: this.description, label: this.label, symbol: a(this.symbol), visualVariables: a(this.visualVariables), authoringInfo: a(this.authoringInfo) });
  }
};
r([m({ type: String, json: { write: true } })], m3.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], m3.prototype, "label", void 0), r([m(m2)], m3.prototype, "symbol", void 0), r([r2({ simple: "simple" })], m3.prototype, "type", void 0), m3 = c = r([a2("esri.renderers.SimpleRenderer")], m3);

export {
  m3 as m
};
//# sourceMappingURL=chunk-U6PQYTWB.js.map

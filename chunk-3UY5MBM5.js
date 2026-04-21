import {
  j
} from "./chunk-JHV3VRSM.js";
import {
  S
} from "./chunk-XABDSHKH.js";
import {
  h
} from "./chunk-UAINLSVQ.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-VGPJZZUW.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-GUUR524U.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
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
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import {
  A
} from "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/UnsupportedLayer.js
var a2 = class extends j(S(h)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise(((e, o) => {
      A((() => {
        const e2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s2 = "Unsupported layer type";
        e2 && (s2 += " " + e2), o(new s("layer:unsupported-layer-type", s2, { layerType: e2 }));
      }));
    })));
  }
  read(e, r2) {
    const o = { resourceInfo: e };
    null != e.id && (o.id = e.id), null != e.title && (o.title = e.title), super.read(o, r2);
  }
  write(e, r2) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
r([m({ readOnly: true })], a2.prototype, "resourceInfo", void 0), r([m({ type: ["show", "hide"] })], a2.prototype, "listMode", void 0), r([m({ type: Boolean, readOnly: false })], a2.prototype, "persistenceEnabled", void 0), r([m({ json: { read: false }, readOnly: true, value: "unsupported" })], a2.prototype, "type", void 0), a2 = r([a("esri.layers.UnsupportedLayer")], a2);
var l = a2;
export {
  l as default
};
//# sourceMappingURL=chunk-3UY5MBM5.js.map

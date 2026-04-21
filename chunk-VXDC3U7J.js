import {
  e as e2
} from "./chunk-3OCGGKGL.js";
import {
  v
} from "./chunk-JU4F45PS.js";
import "./chunk-QXQL3IAF.js";
import {
  a as a4
} from "./chunk-2ZBJ3QEF.js";
import {
  o as o2
} from "./chunk-XO2Q4GTH.js";
import "./chunk-NJQ64CA7.js";
import "./chunk-BCHRF6XZ.js";
import "./chunk-UOO4OHDH.js";
import {
  l as l3,
  l2 as l4,
  t as t3
} from "./chunk-MCUOQURR.js";
import {
  g
} from "./chunk-XPKSR4RR.js";
import {
  t
} from "./chunk-K4QLHUTP.js";
import {
  l as l2
} from "./chunk-RA742Y2R.js";
import {
  A
} from "./chunk-ER5XTUOV.js";
import {
  p
} from "./chunk-ITUTMIB7.js";
import "./chunk-B3QELSYM.js";
import "./chunk-K5OIUFLW.js";
import {
  t as t2
} from "./chunk-MAR5KPTI.js";
import {
  b2 as b
} from "./chunk-EX6CFV7G.js";
import "./chunk-IXAEY3WK.js";
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
import "./chunk-5J6F3ZUX.js";
import "./chunk-VGPJZZUW.js";
import "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-GUUR524U.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  k as k2
} from "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import {
  U,
  a as a3,
  l,
  w
} from "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import {
  e,
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
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
import "./chunk-66AJ5KSJ.js";
import {
  n
} from "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  a,
  k
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var C = class extends p(t2(b(j(l4(l3(S(h))))))) {
  constructor(e3) {
    super(e3), this.allLayers = new l2({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t3(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = k(((e4, r3, t4) => __async(this, null, function* () {
      const { save: i2, saveAs: s } = yield import("./chunk-L5JYTMJT.js");
      switch (e4) {
        case A.SAVE:
          return i2(this, r3);
        case A.SAVE_AS:
          return s(this, t4, r3);
      }
    })));
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([l((() => {
      let e3 = this.parent;
      for (; e3 && "parent" in e3 && e3.parent; ) e3 = e3.parent;
      return e3 && e2 in e3;
    }), ((e3) => {
      const r3 = "prevent-adding-tables";
      this.removeHandles(r3), e3 && (this.tables.removeAll(), this.addHandles(a3((() => this.tables), "before-add", ((e4) => {
        e4.preventDefault(), i.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      })), r3));
    }), w), l((() => this.visible), this._onVisibilityChange.bind(this), U)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === e.USER;
  }
  _writeLayers(e3, r3, t4, i2) {
    const s = [];
    if (!e3) return s;
    e3.forEach(((e4) => {
      const r4 = g(e4, i2.webmap ? i2.webmap.getLayerJSONFromResourceInfo(e4) : null, i2);
      r4?.layerType && s.push(r4);
    })), r3.layers = s;
  }
  set portalItem(e3) {
    this._set("portalItem", e3);
  }
  readPortalItem(e3, r3, t4) {
    const { itemId: i2, layerType: s } = r3;
    if ("GroupLayer" === s && i2) return new k2({ id: i2, portal: t4?.portal });
  }
  writePortalItem(e3, r3) {
    e3?.id && (r3.itemId = e3.id);
  }
  set visibilityMode(e3) {
    const r3 = this._get("visibilityMode") !== e3;
    this._set("visibilityMode", e3), r3 && this._enforceVisibility(e3, this.visible);
  }
  beforeSave() {
    return __async(this, null, function* () {
      return o2(this);
    });
  }
  load(e3) {
    const r3 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service", "Video Service"], layerModuleTypeMap: a4, populateGroupLayer: v }, e3).catch(((e4) => {
      if (a(e4), this.sourceIsPortalItem) throw e4;
    }));
    return this.addResolvingPromise(r3), Promise.resolve(this);
  }
  loadAll() {
    return __async(this, null, function* () {
      return t(this, ((e3) => {
        e3(this.layers, this.tables);
      }));
    });
  }
  save(e3) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE, e3);
    });
  }
  saveAs(e3, r3) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE_AS, r3, e3);
    });
  }
  layerAdded(e3) {
    e3.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e3) : "inherited" === this.visibilityMode && (e3.visible = this.visible), this.hasHandles(e3.uid) ? console.error(`Layer read to Grouplayer: uid=${e3.uid}`) : this.addHandles(l((() => e3.visible), ((r3) => this._onChildVisibilityChange(e3, r3)), U), e3.uid);
  }
  layerRemoved(e3) {
    this.removeHandles(e3.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e3) {
    this.layers.forEach(((r3) => {
      r3 !== e3 && (r3.visible = false);
    }));
  }
  _enforceVisibility(e3, r3) {
    if (!n(this).initialized) return;
    const t4 = this.layers;
    let i2 = t4.find(((e4) => e4.visible));
    switch (e3) {
      case "exclusive":
        t4.length && !i2 && (i2 = t4.at(0), i2.visible = true), this._turnOffOtherLayers(i2);
        break;
      case "inherited":
        t4.forEach(((e4) => {
          e4.visible = r3;
        }));
    }
  }
  _onVisibilityChange(e3) {
    "inherited" === this.visibilityMode && this.layers.forEach(((r3) => {
      r3.visible = e3;
    }));
  }
  _onChildVisibilityChange(e3, r3) {
    switch (this.visibilityMode) {
      case "exclusive":
        r3 ? this._turnOffOtherLayers(e3) : this._isAnyLayerVisible() || (e3.visible = true);
        break;
      case "inherited":
        e3.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some(((e3) => e3.visible));
  }
};
r([m({ readOnly: true, dependsOn: [] })], C.prototype, "allLayers", void 0), r([m({ readOnly: true })], C.prototype, "allTables", void 0), r([m({ json: { read: true, write: true } })], C.prototype, "blendMode", void 0), r([m()], C.prototype, "fullExtent", void 0), r([m({ readOnly: true })], C.prototype, "sourceIsPortalItem", null), r([m({ json: { read: false, write: { ignoreOrigin: true } } })], C.prototype, "layers", void 0), r([r2("layers")], C.prototype, "_writeLayers", null), r([m({ type: ["GroupLayer"] })], C.prototype, "operationalLayerType", void 0), r([m({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e3, r3, t4) {
  return { enabled: "Group Layer" === e3?.type && t4?.initiator !== this };
} } }, "web-scene": { read: false, write: false } } } })], C.prototype, "portalItem", null), r([o("web-map", "portalItem", ["itemId"])], C.prototype, "readPortalItem", null), r([r2("web-map", "portalItem", { itemId: { type: String } })], C.prototype, "writePortalItem", null), r([m()], C.prototype, "spatialReference", void 0), r([m({ json: { read: false }, readOnly: true, value: "group" })], C.prototype, "type", void 0), r([m({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e3, r3, t4) => {
  "inherited" !== e3 && (r3[t4] = e3);
} } } } })], C.prototype, "visibilityMode", null), C = r([a2("esri.layers.GroupLayer")], C);
var E = C;
export {
  E as default
};
//# sourceMappingURL=chunk-VXDC3U7J.js.map

import {
  f
} from "./chunk-VGPJZZUW.js";
import {
  B
} from "./chunk-FNFXIMG2.js";
import {
  _
} from "./chunk-GUUR524U.js";
import {
  k
} from "./chunk-QKFL335K.js";
import {
  C,
  u as u2
} from "./chunk-3XEBNOYK.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
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
  H,
  s as s3
} from "./chunk-CDTLZWCX.js";
import {
  D,
  K,
  W
} from "./chunk-AZFJ5Z42.js";
import {
  a,
  b,
  s as s4,
  u2 as u
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i,
  s,
  s2
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var j = (j2) => {
  let E = class extends j2 {
    constructor() {
      super(...arguments), this.resourceReferences = { portalItem: null, paths: [] }, this.userHasEditingPrivileges = true, this.userHasFullEditingPrivileges = false, this.userHasUpdateItemPrivileges = false;
    }
    destroy() {
      this.portalItem = u(this.portalItem), this.resourceReferences.portalItem = null, this.resourceReferences.paths.length = 0;
    }
    set portalItem(e) {
      e !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", e));
    }
    readPortalItem(e, t, r3) {
      if (t.itemId) return new k({ id: t.itemId, portal: r3?.portal });
    }
    writePortalItem(e, t) {
      e?.id && (t.itemId = e.id);
    }
    loadFromPortal(e, t) {
      return __async(this, null, function* () {
        if (this.portalItem?.id) try {
          const { load: r3 } = yield import("./chunk-HM6GKFIC.js");
          return s4(t), yield r3({ instance: this, supportedTypes: e.supportedTypes, validateItem: e.validateItem, supportsData: e.supportsData, layerModuleTypeMap: e.layerModuleTypeMap, populateGroupLayer: e.populateGroupLayer }, t);
        } catch (r3) {
          throw b(r3) || i.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${r3}`), r3;
        }
      });
    }
    finishLoadEditablePortalLayer(e) {
      return __async(this, null, function* () {
        this._set("userHasEditingPrivileges", yield this._fetchUserHasEditingPrivileges(e).catch(((e2) => (a(e2), true))));
      });
    }
    setUserPrivileges(e, r3) {
      return __async(this, null, function* () {
        if (!s.userPrivilegesApplied) return this.finishLoadEditablePortalLayer(r3);
        if (this.url) try {
          const { features: { edit: t, fullEdit: s5 }, content: { updateItem: i2 } } = yield this._fetchUserPrivileges(e, r3);
          this._set("userHasEditingPrivileges", t), this._set("userHasFullEditingPrivileges", s5), this._set("userHasUpdateItemPrivileges", i2);
        } catch (s5) {
          a(s5);
        }
      });
    }
    _fetchUserPrivileges(e, t) {
      return __async(this, null, function* () {
        let s5 = this.portalItem;
        if (!e || !s5 || !s5.loaded || s5.sourceUrl) return this._fetchFallbackUserPrivileges(t);
        const i2 = !s3?.findCredential(this.url), o2 = e === s5.id;
        if (o2 && s5.portal.user) return this._getUserPrivileges(s5, i2);
        let a3, l;
        if (o2) a3 = s5.portal.url;
        else try {
          a3 = yield B(this.url, t);
        } catch (m2) {
          a(m2);
        }
        if (!a3 || !W(a3, s5.portal.url)) return this._fetchFallbackUserPrivileges(t);
        try {
          const e2 = null != t ? t.signal : null;
          l = yield s3?.getCredential(`${a3}/sharing`, { prompt: false, signal: e2 });
        } catch (m2) {
          a(m2);
        }
        const n = true, p = false, d = false;
        if (!l) return { features: { edit: n, fullEdit: p }, content: { updateItem: d } };
        try {
          if (o2 ? yield s5.reload() : (s5 = new k({ id: e, portal: { url: a3 } }), yield s5.load(t)), s5.portal.user) return this._getUserPrivileges(s5, i2);
        } catch (m2) {
          a(m2);
        }
        return { features: { edit: n, fullEdit: p }, content: { updateItem: d } };
      });
    }
    _getUserPrivileges(e, t) {
      const r3 = f(e);
      return t && (r3.features.edit = true), r3;
    }
    _fetchFallbackUserPrivileges(e) {
      return __async(this, null, function* () {
        let t = true;
        try {
          t = yield this._fetchUserHasEditingPrivileges(e);
        } catch (r3) {
          a(r3);
        }
        return { features: { edit: t, fullEdit: false }, content: { updateItem: false } };
      });
    }
    _fetchUserHasEditingPrivileges(e) {
      return __async(this, null, function* () {
        const t = this.url ? s3?.findCredential(this.url) : null;
        if (!t) return true;
        const s5 = _2.credential === t ? _2.user : yield this._fetchEditingUser(e);
        return _2.credential = t, _2.user = s5, null == s5?.privileges || s5.privileges.includes("features:user:edit");
      });
    }
    _fetchEditingUser(e) {
      return __async(this, null, function* () {
        const t = this.portalItem?.portal?.user;
        if (t) return t;
        const o2 = s3?.findServerInfo(this.url ?? "");
        if (!o2?.owningSystemUrl) return null;
        const a3 = `${o2.owningSystemUrl}/sharing/rest`, l = C.getDefault();
        if (l && l.loaded && K(l.restUrl) === K(a3)) return l.user;
        const n = `${a3}/community/self`, p = null != e ? e.signal : null, u3 = yield _(H(n, { authMode: "no-prompt", query: { f: "json" }, signal: p }));
        return u3.ok ? u2.fromJSON(u3.value.data) : null;
      });
    }
    read(e, t) {
      t && (t.layer = this), super.read(e, t);
    }
    write(e, t) {
      const r3 = t?.portal, s5 = this.portalItem?.id && (this.portalItem.portal || C.getDefault());
      return r3 && s5 && !D(s5.restUrl, r3.restUrl) ? (t.messages && t.messages.push(new s2("layer:cross-portal", `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`, { layer: this })), null) : super.write(e, __spreadProps(__spreadValues({}, t), { layer: this }));
    }
  };
  return r([m({ type: k })], E.prototype, "portalItem", null), r([o("web-document", "portalItem", ["itemId"])], E.prototype, "readPortalItem", null), r([r2("web-document", "portalItem", { itemId: { type: String } })], E.prototype, "writePortalItem", null), r([m({ clonable: false })], E.prototype, "resourceReferences", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasEditingPrivileges", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasFullEditingPrivileges", void 0), r([m({ type: Boolean, readOnly: true })], E.prototype, "userHasUpdateItemPrivileges", void 0), E = r([a2("esri.layers.mixins.PortalLayer")], E), E;
};
var _2 = { credential: null, user: null };

export {
  j
};
//# sourceMappingURL=chunk-JHV3VRSM.js.map

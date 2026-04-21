import {
  s as s3,
  v
} from "./chunk-K577WCJW.js";
import "./chunk-DTLKWZAP.js";
import "./chunk-RVUDI3S4.js";
import "./chunk-GPMZGZVW.js";
import {
  e as e2
} from "./chunk-2LWNM6B6.js";
import "./chunk-ZVQXYP3U.js";
import "./chunk-H4CURCSO.js";
import "./chunk-T4V6OAUU.js";
import "./chunk-5QTM7DAF.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-CMVANBEN.js";
import "./chunk-PPYJGQC2.js";
import "./chunk-6YN6I5ZM.js";
import "./chunk-7O25E3Z7.js";
import "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-JBWJWCIU.js";
import "./chunk-66I5P6AF.js";
import "./chunk-IB63APHQ.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-7DSMXWKH.js";
import "./chunk-CJNEK5TE.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-T5MN4FZ3.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-42IM5JRX.js";
import "./chunk-KZTQPSJY.js";
import "./chunk-NSX4LEZU.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import {
  O,
  c as c2,
  e
} from "./chunk-ARPYHGDE.js";
import {
  i2 as i,
  n2 as n
} from "./chunk-5Z6QALRR.js";
import "./chunk-RSPCFOQ5.js";
import {
  s
} from "./chunk-Q4ZBFQUV.js";
import {
  o
} from "./chunk-AQ5AB5ZX.js";
import "./chunk-57B3JMFY.js";
import {
  l
} from "./chunk-MBW5VYJA.js";
import "./chunk-WLCZHZ7R.js";
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
import {
  s as s2
} from "./chunk-ROTWQUU2.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  c
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import "./chunk-QCEU3B4D.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/UtilityNetworkAssociationList.js
var d = "esri-utility-network-association-list";
var p = { featureObserver: `${d}__feature-observer`, filterContainer: `${d}__filter-container`, limitNoticeContainer: `${d}__limit-notice-container`, loadingContainer: `${d}__loading-container` };
var m2 = class extends O {
  constructor(e3, o2) {
    super(e3, o2), this._isFeatureCountNoticeOpen = true, this._observer = new IntersectionObserver((([e4]) => {
      e4?.isIntersecting && this._increaseFeaturePage();
    }), { root: window.document }), this._observerNode = null, this.featuresPerPage = 50, this.filterText = "", this.headingLevel = 5, this.maxFeatureCount = 1e3, this.messagesFeature = null, this.messagesCommon = null, this.selectedLayer = null, this.tooltipReferenceMap = new s2(), this.viewModel = new v();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ icon: () => import("./chunk-5OWLU3NW.js"), input: () => import("./chunk-RIEAONPT.js"), loader: () => import("./chunk-XQ2APPLH.js"), notice: () => import("./chunk-CZ4C6ANR.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  get associatedFeatureCount() {
    const e3 = this.viewModel.associationViewModels, t = this.selectedLayer ? e3.get(this.selectedLayer) : null;
    return t ? t.length : 0;
  }
  set currentFeaturePage(e3) {
    const { featuresPerPage: t, associatedFeatureCount: o2 } = this, i2 = Math.ceil(o2 / t) || 1, r2 = Math.max(Math.min(e3, i2), 1);
    this._set("currentFeaturePage", r2);
  }
  get currentFeaturePage() {
    return this._get("currentFeaturePage") ?? 1;
  }
  get endIndex() {
    const { currentFeaturePage: e3, featuresPerPage: t, maxFeatureCount: o2 } = this;
    return Math.min(e3 * t, o2);
  }
  renderConnectivityIcon(e3, t) {
    const { tooltipReferenceMap: o2 } = this;
    let i2;
    switch (e3) {
      case "junction-edge-from-connectivity":
        i2 = "connection-end-left";
        break;
      case "junction-edge-to-connectivity":
        i2 = "connection-end-right";
        break;
      case "junction-edge-midspan-connectivity":
        i2 = "connection-middle";
        break;
      default:
        i2 = "connection-to-connection";
    }
    return n("calcite-icon", { afterCreate: (e4) => o2.set(t, e4), afterRemoved: () => o2.delete(t), icon: i2, scale: "s", slot: "content-start" });
  }
  renderFeatureCountWarning() {
    const { associatedFeatureCount: e3, maxFeatureCount: t, messagesFeature: o2 } = this;
    return e3 > t ? n("calcite-notice", { class: this._isFeatureCountNoticeOpen ? p.limitNoticeContainer : void 0, closable: true, icon: "information", kind: "info", open: true, scale: "s", width: "full", onCalciteNoticeBeforeOpen: () => this._isFeatureCountNoticeOpen = true, onCalciteNoticeClose: () => this._isFeatureCountNoticeOpen = false }, n("div", { slot: "title" }, o2.associationsLimitNoticeTitle), n("div", { slot: "message" }, s(o2.associationsLimitNoticeMessage, { number: t }))) : null;
  }
  renderFeatureObserver() {
    return n("div", { afterCreate: this._onObserverCreate, bind: this, class: p.featureObserver, key: "feature-observer" });
  }
  renderFilter() {
    return n("div", { class: p.filterContainer, key: "filter" }, n("calcite-input", { icon: "search", placeholder: this.messagesFeature.associationFilterPlaceholder, type: "search", onCalciteInputInput: (e3) => {
      this.filterText = e3.currentTarget.value.trim().toLowerCase(), this.currentFeaturePage = 1;
    } }));
  }
  renderLoading() {
    return n("div", { class: p.loadingContainer, key: "loading-container" }, this.renderLoadingIcon());
  }
  renderLoadingIcon() {
    return n("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  getConnectivityTooltip(e3) {
    const { messagesFeature: t } = this;
    switch (e3) {
      case "connectivity":
      case "junction-junction-connectivity":
        return t.associationsJunctionJunction;
      case "junction-edge-from-connectivity":
        return t.associationsJunctionEdgeFrom;
      case "junction-edge-midspan-connectivity":
        return t.associationsJunctionEdgeMidspan;
      case "junction-edge-to-connectivity":
        return t.associationsJunctionEdgeTo;
      default:
        return "";
    }
  }
  setUpObserver() {
    this.addHandles(l((() => this._observerNode), (() => this._onObserverChange())));
  }
  _increaseFeaturePage() {
    this.currentFeaturePage++;
  }
  _onObserverChange() {
    return __async(this, null, function* () {
      this._observerNode && this._observer.unobserve(this._observerNode);
      const { state: e3, showAllEnabled: t } = this.viewModel;
      this._observerNode && "ready" === e3 && t && this._observer.observe(this._observerNode);
    });
  }
  _onObserverCreate(e3) {
    this._observerNode = e3;
  }
};
r([m()], m2.prototype, "_observer", void 0), r([m()], m2.prototype, "_observerNode", void 0), r([m()], m2.prototype, "associatedFeatureCount", null), r([m()], m2.prototype, "currentFeaturePage", null), r([m()], m2.prototype, "endIndex", null), r([m()], m2.prototype, "featuresPerPage", void 0), r([m()], m2.prototype, "filterText", void 0), r([m()], m2.prototype, "headingLevel", void 0), r([m()], m2.prototype, "maxFeatureCount", void 0), r([m(), e("esri/widgets/Feature/t9n/Feature")], m2.prototype, "messagesFeature", void 0), r([m(), e("esri/t9n/common")], m2.prototype, "messagesCommon", void 0), r([m()], m2.prototype, "selectedLayer", void 0), r([m()], m2.prototype, "tooltipReferenceMap", void 0), r([m({ type: v })], m2.prototype, "viewModel", void 0), m2 = r([a("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")], m2);

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/formatPercentAlong.js
function n2(n5) {
  const { percentAlong: r2 } = n5;
  return null == r2 ? "" : o(r2, { style: "percent", maximumFractionDigits: 2 });
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivity.js
function n3(n5) {
  const { associationType: t } = n5;
  return "connectivity" === t || "junction-junction-connectivity" === t || "junction-edge-from-connectivity" === t || "junction-edge-midspan-connectivity" === t || "junction-edge-to-connectivity" === t;
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivityMidspan.js
function n4(n5) {
  return "junction-edge-midspan-connectivity" === n5.associationType;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociationList.js
var w;
var y = "esri-feature-utility-network-associations";
var f = { base: y, listItemHidden: `${y}__list-item--hidden` };
var b = "nested";
var v2 = w = class extends m2 {
  constructor(e3, t) {
    super(e3, t), this.description = null, this.flowItems = null, this.flowType = "feature-utility-network-association-type", this.listType = null, this.parentFeatureViewModel = null, this.title = null, this.viewModel = new v(), this.visibleElements = new s3();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ chip: () => import("./chunk-SILTJRMW.js"), icon: () => import("./chunk-5OWLU3NW.js"), list: () => import("./chunk-WXFUURUT.js"), "list-item": () => import("./chunk-466BXH4K.js"), tooltip: () => import("./chunk-IBUKIPT2.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  render() {
    const e3 = this.viewModel.associationViewModels, { state: t, showAllEnabled: i2 } = this.viewModel, { state: s4 } = this.parentFeatureViewModel ?? {};
    return n("div", { class: this.classes(f.base, e2.widget) }, "loading" === t || "querying" === t || "loading" === s4 ? this.renderLoading() : n("calcite-list", { displayMode: b, label: this.selectedLayer?.title ?? this.messagesCommon.untitled }, i2 && this.selectedLayer ? n(i, null, this.renderFilter(), this.renderFeatureCountWarning(), this._renderAssociatedFeatureListPage(), this.renderFeatureObserver()) : Array.from(e3.keys(), ((t2) => this._renderTypeList(t2, e3.get(t2))))));
  }
  _showAllAssociations(e3) {
    const { flowItems: t, viewModel: i2, description: s4 } = this;
    if (!t || !e3) return;
    i2.showAllEnabled = true;
    const l2 = new w({ selectedLayer: e3, title: e3?.title, flowItems: t, parentFeatureViewModel: this.parentFeatureViewModel, featureVisibleElements: this.featureVisibleElements, description: s4, visibleElements: new s3({ title: false, description: false }), viewModel: i2 });
    t.push(l2);
  }
  _renderAssociatedFeatureListPage() {
    const e3 = this.viewModel.associationViewModels.get(this.selectedLayer).filter(((e4) => e4.title.toLowerCase().includes(this.filterText))).slice(0, this.endIndex);
    return [...this._renderTooltips(e3), ...this._renderAssociatedFeatureList(e3)];
  }
  _renderItemTooltip(e3) {
    const { tooltipReferenceMap: t } = this;
    return n3(e3.association) ? n("calcite-tooltip", { key: `tooltip-${e3.featureViewModel.uid}`, overlayPositioning: "fixed", referenceElement: t.get(e3.featureViewModel.uid) }, this.getConnectivityTooltip(e3.association.associationType)) : null;
  }
  _renderAssociatedFeature(e3) {
    const { featureViewModel: i2, title: s4 } = e3, o2 = "loading" === i2.state, l2 = this._findFlowItem(i2), r2 = l2 < 0 && this._isParentFeature(i2), a2 = r2 || l2 >= 0;
    return n("calcite-list-item", { class: o2 ? f.listItemHidden : void 0, description: c(e3.terminalName ?? ""), key: `associated-feature-type-${i2.uid}`, label: c(s4), onCalciteListItemSelect: () => this._handleFeatureClick(r2, l2, i2) }, n3(e3.association) ? this.renderConnectivityIcon(e3.association.associationType, e3.featureViewModel.uid) : null, n4(e3.association) ? n("calcite-chip", { label: n2(e3.association), scale: "s", slot: "content-end" }, n2(e3.association)) : null, this._renderChevronIconNode(a2));
  }
  _selectAssociation(e3) {
    return __async(this, null, function* () {
      const { flowItems: t, featureVisibleElements: i2 } = this;
      if (!t) return;
      e3.abilities = { utilityNetworkAssociationsContent: true };
      const { default: s4 } = yield import("./chunk-MJKP6Z6O.js");
      t.push(new s4({ flowItems: t, flowType: "feature-association", viewModel: e3, visibleElements: i2 }));
    });
  }
  _handleFeatureClick(e3, t, i2) {
    if (e3) this.flowItems.drain(((e4) => {
      "showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy();
    }));
    else if (t < 0 || !this.flowItems) this._selectAssociation(i2);
    else for (; this.flowItems.length > t + 1; ) {
      const e4 = this.flowItems.pop();
      e4 && ("showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy());
    }
  }
  _featureViewModelMatch(e3, t) {
    const i2 = e3.graphic, s4 = i2?.layer;
    let o2 = null;
    "subtype-sublayer" === s4?.type && s4.parent ? o2 = s4.parent.globalIdField ?? null : s4 && "globalIdField" in s4 && (o2 = s4.globalIdField);
    const l2 = o2 ? i2?.attributes[o2] : null, r2 = t.graphic, n5 = r2?.layer;
    let a2 = null;
    "subtype-sublayer" === n5?.type && n5.parent ? a2 = n5.parent.globalIdField ?? null : n5 && "globalIdField" in n5 && (a2 = n5.globalIdField);
    const c3 = a2 ? r2?.attributes[a2] : null;
    return l2 && c3 && l2 === c3;
  }
  _isParentFeature(e3) {
    const t = this.flowItems?.getItemAt(0);
    if (!t) return false;
    const i2 = t.parentFeatureViewModel;
    return this._featureViewModelMatch(i2, e3);
  }
  _findFlowItem(e3) {
    return this.flowItems?.findIndex(((t) => {
      if ("feature-association" !== t.flowType) return false;
      const i2 = t.viewModel;
      return this._featureViewModelMatch(i2, e3);
    })) ?? -1;
  }
  _renderTooltips(e3) {
    return e3.toArray().map(((e4) => this._renderItemTooltip(e4)));
  }
  _renderAssociatedFeatureList(e3) {
    return e3.toArray().map(((e4) => this._renderAssociatedFeature(e4)));
  }
  _renderChevronIconNode(e3) {
    return n("calcite-icon", { flipRtl: true, icon: e3 ? "move-up" : "chevron-right", scale: "s", slot: "content-end" });
  }
  _renderTypeList(e3, t) {
    const { messagesFeature: i2 } = this, { displayCount: s4 } = this.viewModel, o2 = t.slice(0, s4), l2 = o2.length < t.length;
    return n("calcite-list-item", { expanded: true, key: "show-all", label: e3.title, value: e3.id }, n("calcite-chip", { label: String(t.length), scale: "s", slot: "content-end" }, t.length), n("calcite-list", { group: e3.id, label: e3.title ?? "" }, [this._renderTooltips(o2), this._renderAssociatedFeatureList(o2)], l2 ? n("calcite-list-item", { description: s(i2?.numberRecords, { number: t.length.toString() }), key: "show-all-item", label: i2.showAll, onCalciteListItemSelect: () => this._showAllAssociations(e3) }, n("calcite-icon", { icon: "list", scale: "s", slot: "content-end" })) : null));
  }
};
r([m()], v2.prototype, "description", void 0), r([m()], v2.prototype, "featureVisibleElements", void 0), r([m()], v2.prototype, "flowItems", void 0), r([m()], v2.prototype, "flowType", void 0), r([m()], v2.prototype, "listType", void 0), r([m()], v2.prototype, "parentFeatureViewModel", void 0), r([m()], v2.prototype, "title", void 0), r([m({ type: v })], v2.prototype, "viewModel", void 0), r([m({ type: s3, nonNullable: true })], v2.prototype, "visibleElements", void 0), v2 = w = r([a("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")], v2);
var g = v2;
export {
  g as default
};
//# sourceMappingURL=chunk-TEG4PG72.js.map

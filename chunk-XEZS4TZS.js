import {
  _
} from "./chunk-D5HSO267.js";
import "./chunk-VBCXKFWP.js";
import {
  h as h2
} from "./chunk-5NORWNRZ.js";
import {
  h
} from "./chunk-MBW5VYJA.js";
import {
  b,
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-TBOXDPPB.js";
import "./chunk-IGNVDP3D.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  c,
  e,
  i,
  k
} from "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/2d/layers/support/MediaLayerInteraction.js
var h3 = { redo: "r", undo: "z" };
var p = Symbol();
var m2 = Symbol();
var u = Symbol();
var _2 = class extends b {
  constructor(e2) {
    super(e2), this._tool = null, this._updatingHandles = new h2(), this.enabled = false, this._onPointerMove = k(((e3) => __async(this, null, function* () {
      const t = yield this._updatingHandles.addPromise(this._findElementAtScreenPoint(e3));
      this.destroyed || (this.removeHandles(m2), t && t !== this.selectedElement && (this.view.cursor = "pointer", this.addHandles(e((() => this.view.cursor = null)), m2)));
    })));
  }
  initialize() {
    this.addHandles(c(this._updatingHandles)), this._updatingHandles.add((() => this.enabled), ((e2) => this._setEnabled(e2)), h), this._updatingHandles.add((() => this._preferredInteractionTool), (() => this._preferredInteractionToolChanged()));
  }
  get _validatedSelectedElement() {
    const e2 = this.selectedElement;
    if (!e2) return null;
    const { layer: { source: t } } = this;
    return t ? "hasElement" in t ? t.hasElement(e2) ? e2 : null : t === e2 ? e2 : null : null;
  }
  get _preferredInteractionTool() {
    return this.options?.tool ?? "transform";
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  _setEnabled(e2) {
    if (this.removeHandles(p), !e2) return;
    const { view: t } = this;
    this.addHandles([t.on("immediate-click", ((e3) => this._onClick(e3)), _.TOOL), t.on("pointer-move", ((e3) => this._onPointerMove(e3).catch((() => {
    }))), _.TOOL), t.on("key-down", ((e3) => {
      e3.key === h3.undo && this._tool?.canUndo() && (this._tool.undo(), e3.stopPropagation()), e3.key === h3.redo && this._tool?.canRedo() && (this._tool.redo(), e3.stopPropagation());
    })), this._updatingHandles.add((() => this._validatedSelectedElement), ((e3) => this._selectedElementChanged(e3)), h), e((() => {
      t.cursor = null, this._removeTool();
    }))], p);
  }
  _findElementAtScreenPoint(e2) {
    return __async(this, null, function* () {
      const t = (yield this.view.hitTest(e2, { include: [this.layer] })).results[0];
      return "media" === t?.type ? t.element : null;
    });
  }
  _onClick(e2) {
    return __async(this, null, function* () {
      yield this._updatingHandles.addPromise(e2.defer((() => __async(this, null, function* () {
        const t = yield this._findElementAtScreenPoint(e2);
        this.destroyed || (t && e2.stopPropagation(), this.selectedElement = t, this.selectedElement && (this.view.cursor = null));
      }))));
    });
  }
  _preferredInteractionToolChanged() {
    const { _tool: e2 } = this;
    e2 && (this._preferredInteractionTool === e2.type || this._updatingHandles.addPromise(this._recreateTool()));
  }
  _recreateTool() {
    return __async(this, null, function* () {
      this.removeHandles(u), this._removeTool();
      const e2 = this._validatedSelectedElement;
      if (!e2) return;
      const t = new AbortController();
      this.addHandles(i(t), u);
      const { TransformTool: s, ControlPointsTransformTool: n } = yield import("./chunk-K2O35ZJL.js");
      if (t.signal.aborted) return;
      const { view: r2 } = this;
      switch (this._preferredInteractionTool) {
        case "transform":
          this._tool = new s({ target: e2, view: r2 });
          break;
        case "reshape":
          this._tool = new n({ mediaElement: e2, view: r2 });
      }
      this.addHandles(e((() => {
        this._tool && (r2.tools.remove(this._tool), this._tool = null);
      })), this._tool), r2.addAndActivateTool(this._tool);
    });
  }
  _removeTool() {
    this._tool && this.removeHandles(this._tool);
  }
  _selectedElementChanged(e2) {
    return __async(this, null, function* () {
      e2?.georeference ? yield this._updatingHandles.addPromise(this._recreateTool()) : this._removeTool();
    });
  }
};
r([m()], _2.prototype, "_validatedSelectedElement", null), r([m()], _2.prototype, "_preferredInteractionTool", null), r([m({ constructOnly: true })], _2.prototype, "view", void 0), r([m({ constructOnly: true })], _2.prototype, "layer", void 0), r([m()], _2.prototype, "selectedElement", void 0), r([m()], _2.prototype, "enabled", void 0), r([m()], _2.prototype, "options", void 0), r([m()], _2.prototype, "updating", null), _2 = r([a("esri.views.2d.layers.support.MediaLayerInteraction")], _2);
export {
  _2 as MediaLayerInteraction
};
//# sourceMappingURL=chunk-XEZS4TZS.js.map

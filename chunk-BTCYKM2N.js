import {
  whenTransitionDone
} from "./chunk-HGDKRNYV.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@esri/calcite-components/dist/chunks/openCloseComponent.js
function isOpen(component) {
  return component[component.openProp || "open"];
}
function toggleOpenClose(component) {
  return __async(this, null, function* () {
    yield component.updateComplete;
    if (isOpen(component)) {
      component.onBeforeOpen();
    } else {
      component.onBeforeClose();
    }
    yield component.updateComplete;
    if (component.transitionEl) {
      yield whenTransitionDone(component.transitionEl, component.transitionProp);
    }
    if (isOpen(component)) {
      component.onOpen();
    } else {
      component.onClose();
    }
  });
}

export {
  toggleOpenClose
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/openCloseComponent.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-BTCYKM2N.js.map

import {
  makeGenericController
} from "./chunk-PIL5WCL5.js";
import {
  focusElement,
  getRootNode
} from "./chunk-HGDKRNYV.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@esri/calcite-components/dist/chunks/component.js
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}
function componentFocusable(component) {
  return __async(this, null, function* () {
    yield component.componentOnReady();
    yield component.updateComplete;
  });
}

// node_modules/@esri/calcite-components/dist/chunks/useSetFocus.js
var useSetFocus = () => {
  return makeGenericController((component, controller) => {
    let abortController;
    function handleFocusOut() {
      abortController?.abort();
    }
    controller.onLoad(() => {
      component.listen("focus", () => {
        abortController = new AbortController();
        component.el.addEventListener("focusout", handleFocusOut, { signal: abortController.signal });
      });
    });
    controller.onDisconnected(() => {
      component.el.removeEventListener("focusout", handleFocusOut);
    });
    return (getFocusTarget, options) => __async(null, null, function* () {
      if (component.disabled) {
        return;
      }
      const focusConfig = toFocusConfig(getFocusTarget());
      if (!focusConfig) {
        return;
      }
      const { target, includeContainer, strategy } = focusConfig;
      const rootNode = getRootNode(component.el);
      const currentActiveElement = rootNode.activeElement;
      yield componentFocusable(component);
      const focusAlreadyChanged = currentActiveElement !== rootNode.activeElement;
      if (focusAlreadyChanged || abortController && !abortController?.signal.aborted) {
        return;
      }
      component.el.removeEventListener("focus", handleFocusOut);
      return focusElement(target, includeContainer, strategy, component.el, options);
    });
  });
};
function isFocusOverride(focusTarget) {
  return "target" in focusTarget && ("includeContainer" in focusTarget || "strategy" in focusTarget);
}
function toFocusConfig(focusTarget) {
  if (!focusTarget) {
    return;
  }
  return isFocusOverride(focusTarget) ? focusTarget : { target: focusTarget };
}

export {
  getIconScale,
  useSetFocus
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/component.js:
@esri/calcite-components/dist/chunks/useSetFocus.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-UEE5O3TA.js.map

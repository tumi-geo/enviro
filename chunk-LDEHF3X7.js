import {
  makeGenericController
} from "./chunk-PIL5WCL5.js";

// node_modules/@esri/calcite-components/dist/chunks/useCancelable.js
var useCancelable = () => {
  return makeGenericController((_, controller) => {
    const resources = /* @__PURE__ */ new Set();
    controller.onDisconnected(() => {
      resources.forEach((resource) => resource.cancel());
    });
    return {
      add: (resourceOrResources) => {
        [resourceOrResources].flat().forEach((resource) => resources.add(resource));
      },
      resources
    };
  });
};

export {
  useCancelable
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/useCancelable.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.3.3 *)
*/
//# sourceMappingURL=chunk-LDEHF3X7.js.map

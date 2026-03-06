import {
  FRONTEND_CONFIG
} from "./chunk-DOCLYP45.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-IPMWBXXP.js";

// libs/frontend/shared/util/src/lib/pipes/image-url.pipe.ts
var ImageUrlPipe = class _ImageUrlPipe {
  transform(imagePath) {
    if (!imagePath) {
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    }
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    const cleanPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    return `${FRONTEND_CONFIG.staticUrl}/${cleanPath}`;
  }
  static \u0275fac = function ImageUrlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageUrlPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "imageUrl", type: _ImageUrlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageUrlPipe, [{
    type: Pipe,
    args: [{
      name: "imageUrl",
      standalone: true
    }]
  }], null, null);
})();

export {
  ImageUrlPipe
};
//# sourceMappingURL=chunk-SKS7KXOA.js.map

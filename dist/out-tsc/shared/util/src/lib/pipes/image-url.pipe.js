import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config';
let ImageUrlPipe = class ImageUrlPipe {
    transform(imagePath) {
        if (!imagePath) {
            return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
        }
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
        return `${FRONTEND_CONFIG.staticUrl}/${cleanPath}`;
    }
};
ImageUrlPipe = __decorate([
    Pipe({
        name: 'imageUrl',
        standalone: true,
    })
], ImageUrlPipe);
export { ImageUrlPipe };
//# sourceMappingURL=image-url.pipe.js.map
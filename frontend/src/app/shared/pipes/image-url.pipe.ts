import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';
@Pipe({
  name: 'imageUrl',
  standalone: true,
})
export class ImageUrlPipe implements PipeTransform {
  transform(imagePath: string | null | undefined): string {
    if (!imagePath) {
      return '/assets/images/placeholder.png';
    }
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    return `${environment.staticUrl}/${cleanPath}`;
  }
}

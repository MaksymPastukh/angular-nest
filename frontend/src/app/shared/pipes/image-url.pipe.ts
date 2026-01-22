import { Pipe, PipeTransform } from '@angular/core'
import { environment } from '../../../environments/environment'
@Pipe({
  name: 'imageUrl',
  standalone: true,
})
export class ImageUrlPipe implements PipeTransform {
  transform(imagePath: string | null | undefined): string {
    if (!imagePath) {
      // Возвращаем серый placeholder как data URI вместо несуществующего файла
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    }
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath
    return `${environment.staticUrl}/${cleanPath}`
  }
}

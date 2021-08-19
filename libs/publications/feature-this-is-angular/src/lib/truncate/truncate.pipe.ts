import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tilTruncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string | null | undefined): string {
    text ??= '';

    const cutoff = 900;

    return text.length <= cutoff ? text : text.substring(0, cutoff) + ' (...)';
  }
}

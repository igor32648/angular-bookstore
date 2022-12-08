import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'horror': return 'sentiment_very_dissatisfied';
      case 'romance': return 'face_3';
      case 'kids': return 'child_care';
    }
    return 'code';
  }

}

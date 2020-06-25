import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userslice'
})
export class UserslicePipe implements PipeTransform {

  slicedusers = [];

  transform(value: any, start: number, end: number) {
    for (let i = start ; i < end ; i++){
      this.slicedusers[i] = value[i];
    }
    return this.slicedusers;
  }

}

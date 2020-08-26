import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePure'
})
export class PipePurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = args.toLocaleString().toLocaleLowerCase();
    return value.filter(
      data => data.toLocaleLowerCase().includes(filter)
    );
  }

}

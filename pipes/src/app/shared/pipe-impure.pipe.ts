import { PipePurePipe } from './pipe-pure.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImpure',
  pure: false
})
export class PipeImpurePipe extends PipePurePipe {

}

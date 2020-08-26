import { PipeImpurePipe } from './pipe-impure.pipe';

describe('PipeImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeImpurePipe();
    expect(pipe).toBeTruthy();
  });
});

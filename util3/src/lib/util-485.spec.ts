import { util } from './util';

describe('util', () => {
  it('should work', async () => {
    let s = '';

    for (let i=0; i<1_000_000; i++) {
      s += i;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(util()).toEqual('util');
  });
});

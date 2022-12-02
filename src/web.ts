import { WebPlugin } from '@capacitor/core';

import type { SwipeEditPlugin } from './definitions';

export class SwipeEditWeb extends WebPlugin implements SwipeEditPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

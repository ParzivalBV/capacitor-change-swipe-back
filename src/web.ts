import { WebPlugin } from '@capacitor/core';

import type { SwipeEditPlugin } from './definitions';

export class SwipeEditWeb extends WebPlugin implements SwipeEditPlugin {
  async enable(options: { value: string }): Promise<{ value: string }> {
    console.log('Enable', options);
    return options;
  }
  async disable(options: { value: string }): Promise<{ value: string }> {
    console.log('Disable', options);
    return options;
  }
}

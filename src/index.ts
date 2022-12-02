import { registerPlugin } from '@capacitor/core';

import type { SwipeEditPlugin } from './definitions';

const SwipeEdit = registerPlugin<SwipeEditPlugin>('SwipeEdit', {
  web: () => import('./web').then(m => new m.SwipeEditWeb()),
});

export * from './definitions';
export { SwipeEdit };

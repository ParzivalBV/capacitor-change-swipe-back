import { registerPlugin } from '@capacitor/core';
const SwipeEdit = registerPlugin('SwipeEdit', {
    web: () => import('./web').then(m => new m.SwipeEditWeb()),
});
export * from './definitions';
export { SwipeEdit };
//# sourceMappingURL=index.js.map
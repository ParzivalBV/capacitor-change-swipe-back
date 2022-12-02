import { WebPlugin } from '@capacitor/core';
export class SwipeEditWeb extends WebPlugin {
    async enable(options) {
        console.log('Enable', options);
        return options;
    }
    async disable(options) {
        console.log('Disable', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map
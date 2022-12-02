'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SwipeEdit = core.registerPlugin('SwipeEdit', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SwipeEditWeb()),
});

class SwipeEditWeb extends core.WebPlugin {
    async enable(options) {
        console.log('Enable', options);
        return options;
    }
    async disable(options) {
        console.log('Disable', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SwipeEditWeb: SwipeEditWeb
});

exports.SwipeEdit = SwipeEdit;
//# sourceMappingURL=plugin.cjs.js.map

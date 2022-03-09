var capacitorIntercomBridge = (function (exports, core) {
    'use strict';

    const IntercomBridge = core.registerPlugin('IntercomBridge', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IntercomBridgeWeb()),
    });

    class IntercomBridgeWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
        async registerUserWithUserId(options) {
            console.error(`registerUserWithUserId cant reg ${options.userId} wrong platform`);
            return { value: 'wrong platform' };
        }
        async registerUndefinedUser() {
            console.error(`registerUndefinedUser cant reg wrong platform`);
            return { value: 'wrong platform' };
        }
        async logout() {
            console.error(`cant logout wrong platform`);
            return { value: 'wrong platform' };
        }
        async updateUser(options) {
            console.error(`cant update user name ${options.name} wrong platform`);
            return { value: 'wrong platform' };
        }
        async presentMessenger() {
            console.error('presentMessenger wrong platform');
            return { value: 'wrong platform' };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IntercomBridgeWeb: IntercomBridgeWeb
    });

    exports.IntercomBridge = IntercomBridge;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map

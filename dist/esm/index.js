import { registerPlugin } from '@capacitor/core';
const IntercomBridge = registerPlugin('IntercomBridge', {
    web: () => import('./web').then(m => new m.IntercomBridgeWeb()),
});
export * from './definitions';
export { IntercomBridge };
//# sourceMappingURL=index.js.map
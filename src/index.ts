import { registerPlugin } from '@capacitor/core';

import type { IntercomBridgePlugin } from './definitions';

const IntercomBridge = registerPlugin<IntercomBridgePlugin>('IntercomBridge', {
  web: () => import('./web').then(m => new m.IntercomBridgeWeb()),
});

export * from './definitions';
export { IntercomBridge };

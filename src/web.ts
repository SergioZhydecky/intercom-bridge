import { WebPlugin } from '@capacitor/core';

import type { IntercomBridgePlugin } from './definitions';

export class IntercomBridgeWeb
  extends WebPlugin
  implements IntercomBridgePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

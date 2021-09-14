import { WebPlugin } from '@capacitor/core';

import type { IntercomBridgePlugin } from './definitions';

export class IntercomBridgeWeb
  extends WebPlugin
  implements IntercomBridgePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async registerUserWithUserId(options: { userId: string }): Promise<{ value: string }> {
    console.error(`registerUserWithUserId cant reg ${options.userId} wrong platform`);
    return {value: 'wrong platform'}
  }

  async presentMessenger(): Promise<{ value: string }> {
    console.error('presentMessenger wrong platform');
    return {value: 'wrong platform'}
  }
}

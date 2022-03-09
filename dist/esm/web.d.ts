import { WebPlugin } from '@capacitor/core';
import type { IntercomBridgePlugin } from './definitions';
export declare class IntercomBridgeWeb extends WebPlugin implements IntercomBridgePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    registerUserWithUserId(options: {
        userId: string;
    }): Promise<{
        value: string;
    }>;
    registerUndefinedUser(): Promise<{
        value: string;
    }>;
    logout(): Promise<{
        value: string;
    }>;
    updateUser(options: {
        name: string;
    }): Promise<{
        value: string;
    }>;
    presentMessenger(): Promise<{
        value: string;
    }>;
}

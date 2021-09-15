export interface IntercomBridgePlugin {
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
    presentMessenger(): Promise<{
        value: string;
    }>;
}

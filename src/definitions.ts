export interface IntercomBridgePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

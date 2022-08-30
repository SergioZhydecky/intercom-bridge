export interface IntercomBridgePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  registerUserWithUserId(options: { userId: string }): Promise<{ value: string }>;
  registerUndefinedUser(): Promise<{ value: string }>;
  logout(): Promise<{ value: string }>;
  updateUser(options: { name: string, user_id?: string }): Promise<{ value: string }>;
  presentMessenger(): Promise<{ value: string }>;
}

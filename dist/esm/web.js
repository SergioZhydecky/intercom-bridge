import { WebPlugin } from '@capacitor/core';
export class IntercomBridgeWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map
import { NativeModules } from 'react-native';

const { GetStoreModule } = NativeModules;

export const initializeSDK = async (): Promise<string> => {
    return await GetStoreModule.initializeSDK();
};

export const processPayment = async (amount: string): Promise<string> => {
    return await GetStoreModule.processPayment(amount);
};
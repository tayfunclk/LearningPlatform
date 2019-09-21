
import { InjectionToken } from "@angular/core";
export let APP_CONFIG = new InjectionToken("common");


export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
   // apiEndpoint: 'http://127.0.0.1:6666/api/'
   apiEndpoint:'http://localhost:4000/products'
};


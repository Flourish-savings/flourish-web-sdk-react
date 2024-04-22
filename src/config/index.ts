import ProdConfig from './config.production';
import StagingConfig from './config.staging';

let BACKEND_API_URL = new Map<string, string>();
let FRONTEND_URL = new Map<string, string>();
let FLOURISH_SDK_APP_VERSION = new Map<string, string>();

BACKEND_API_URL.set('staging', StagingConfig.BACKEND_API_URL);
BACKEND_API_URL.set('production', ProdConfig.BACKEND_API_URL);

FRONTEND_URL.set('staging_v1', StagingConfig.FRONTEND_URL_V1);
FRONTEND_URL.set('production_v1', ProdConfig.FRONTEND_URL_V1);

FRONTEND_URL.set('staging_v2', StagingConfig.FRONTEND_URL_V2);
FRONTEND_URL.set('production_v2', ProdConfig.FRONTEND_URL_V2);

FLOURISH_SDK_APP_VERSION.set('staging', StagingConfig.FLOURISH_SDK_APP_VERSION);
FLOURISH_SDK_APP_VERSION.set('production', ProdConfig.FLOURISH_SDK_APP_VERSION);

const Config = {
  BACKEND_API_URL,
  FRONTEND_URL: FRONTEND_URL,
  FLOURISH_SDK_APP_VERSION
};

export const buildFrontEndUrl = (environment: string, version: string) => {
  return Config.FRONTEND_URL.get(`${environment}_${version}`);
}

export const buildBackEndUrl = (environment: string)=> {
  return Config.BACKEND_API_URL.get(environment);
}

export const getSdkVersion = (environment: string) => {
  return Config.FLOURISH_SDK_APP_VERSION.get(environment)
}

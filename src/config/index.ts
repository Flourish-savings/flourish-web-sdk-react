import ProdConfig from './config.production';
import StagingConfig from './config.staging';

let BACKEND_API_URL = new Map<string, string>();
let FRONTEND_URL = new Map<string, string>();

BACKEND_API_URL.set('staging', StagingConfig.BACKEND_API_URL);
BACKEND_API_URL.set('production', ProdConfig.BACKEND_API_URL);

FRONTEND_URL.set('staging_v1', StagingConfig.FRONTEND_URL_V1);
FRONTEND_URL.set('production_v1', ProdConfig.FRONTEND_URL_V1);

FRONTEND_URL.set('staging_v2', StagingConfig.FRONTEND_URL_V2);
FRONTEND_URL.set('production_v2', ProdConfig.FRONTEND_URL_V2);

const Config = {
  BACKEND_API_URL,
  FRONTEND_URL: FRONTEND_URL,
};

export const buildFrontEndUrl = (environment: string, version: string) => {
  return Config.FRONTEND_URL.get(`${environment}_${version}`);
}

export const buildBackEndUrl = (environment: string)=> {
  return Config.BACKEND_API_URL.get(environment);
}

export const get_SDK_VERSION = () => {
  return StagingConfig.FLOURISH_SDK_APP_VERSION
}

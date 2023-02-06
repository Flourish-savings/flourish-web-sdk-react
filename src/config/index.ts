import ProdConfig from './config.production';
import StagingConfig from './config.staging';

let FRONTEND_URL = new Map<string, string>();

FRONTEND_URL.set('staging', StagingConfig.FRONTEND_URL);
FRONTEND_URL.set('production', ProdConfig.FRONTEND_URL);

const Config = {
  FRONTEND_URL: FRONTEND_URL,
};

export default Config;

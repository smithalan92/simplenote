/* eslint-disable no-param-reassign */
const os = require('os');
const path = require('path');

const windowDefaults = {
  webPreferences: {
    nodeIntegration: true,
    webSecurity: false,
  },
  show: false,
  icon: path.resolve(__static, './images/app-icon.ico'), // eslint-disable-line
  center: true,
  height: 500,
  width: 800,
  minHeight: 500,
  minWidth: 800,
  title: 'Simple Note',
};

const getAppPlatform = () => {
  const platform = os.platform();

  switch (platform) {
    case 'darwin':
      return 'mac';
    case 'linux':
      return 'linux';
    case 'win32':
      return 'windows';
    default:
      throw new Error('OS not supported');
  }
};

const getPlatformWindowConfig = () => {
  const windowConfig = {};
  Object.assign(windowConfig, windowDefaults);

  // Set platform specific window attributes
  switch (getAppPlatform()) {
    case 'mac':
      windowConfig.titleBarStyle = 'hidden';
      break;
    case 'windows':
      windowConfig.frame = false;
      break;
    default: // Do nada
  }

  return windowConfig;
};

module.exports = {
  getAppPlatform,
  getPlatformWindowConfig,
};

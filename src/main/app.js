/* eslint-disable no-path-concat */
/* eslint-disable no-param-reassign */

const { app, shell } = require('electron');
const window = require('./Window');

const attachWebContentsEvents = (contents) => {
  contents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
};

const attachAppEvents = () => {
  app.on('window-all-closed', () => {
    app.quit();
  });

  app.on('ready', () => {
    window.create();
  });

  app.on('activate', () => {
    window.show();
  });

  app.on('before-quit', () => {
    window.detachEvents();
  });

  // Handle link clicks within the app so they open
  // in the default browser
  app.on('web-contents-created', (e, contents) => {
    attachWebContentsEvents(contents);
  });
};

module.exports = {
  attachAppEvents,
};

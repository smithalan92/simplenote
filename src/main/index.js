/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  // eslint-disable-next-line
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

const { app } = require('electron');
const simpleNote = require('./app');
const window = require('./Window');

const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    window.show();
  });
}

simpleNote.attachAppEvents();

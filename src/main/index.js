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

// We only want to allow a single instance of the chat app to run
// To ensure this, we make the app a single instance when it starts starts.
// The callback will be executed on the first instance of the app if a second
// instance is started
const isSecondInstance = app.makeSingleInstance((() => {
  window.show();
}));

if (isSecondInstance) {
  app.quit();
}

simpleNote.attachAppEvents();

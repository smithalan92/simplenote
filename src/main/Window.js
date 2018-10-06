const { app, BrowserWindow, dialog } = require('electron');
const util = require('./util');

class Window {
  constructor() {
    this.window = null;
  }

  isWindowAvailable() {
    if (this.window && !this.window.isDestroyed()) return true;
    return false;
  }

  getWindow() {
    if (this.isWindowAvailable) return this.window;
    return null;
  }

  create() {
    // We only want a single browser window open
    if (this.isWindowAvailable()) return;

    this.window = new BrowserWindow(util.getPlatformWindowConfig());

    const winURL = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080'
      : `file://${__dirname}/index.html`;

    this.window.loadURL(winURL);

    this.window.once('ready-to-show', () => {
      this.attachEvents();
      this.show();
    });
  }

  hide() {
    if (this.isWindowAvailable()) this.window.hide();
  }

  show() {
    if (this.isWindowAvailable()) this.window.show();
  }

  focus() {
    if (this.isWindowAvailable()) this.window.focus();
  }

  minimize() {
    if (this.isWindowAvailable()) this.window.minimize();
  }

  maximize() {
    if (this.isWindowAvailable()) this.window.maximize();
  }

  restore() {
    if (this.isWindowAvailable()) this.window.restore();
  }

  forceQuit(quitFunction) {
    if (this.isWindowAvailable()) {
      this.window.removeAllListeners('close');
      this.window.close();
    }

    if (typeof quitFunction === 'function') {
      quitFunction();
    } else {
      app.quit();
    }
  }

  showCrashDialog() {
    dialog.showMessageBox({
      type: 'error',
      title: 'Oops, an error occurred',
      cancelId: 1,
      message: 'Oops, an error occurred. We have sent a report and will get the issue fixed ASAP.',
      buttons: ['Relaunch', 'Close'],
    }, (buttonIndex) => {
      if (buttonIndex === 1) {
        this.forceQuit();
      } else if (buttonIndex === 0) {
        app.relaunch();
        app.exit(0);
      }
    });
  }

  attachEvents() {
    if (!this.isWindowAvailable()) return;

    this.window.on('close', (event) => {
      event.preventDefault();
      this.window.hide();

      // For mac, we need to do extra special stuff for
      // fullscreen, or the screen will go black when the apps hidden
      if (util.getAppPlatform() === 'mac') {
        if (this.window.isFullScreen()) {
          this.window.once('leave-full-screen', () => {
            this.window.hide();
          });
          this.window.setFullScreen(false);
        }
      }
    });

    this.window.webContents.on('crashed', () => {
      this.window.hide();
      this.showCrashDialog();
    });
  }

  detachEvents() {
    if (this.isWindowAvailable()) {
      this.window.removeAllListeners();
    }
  }

  setDefaultSize() {
    if (!this.isWindowAvailable()) return;

    this.window.setSize(800, 500);
  }

  sendIPCMessage(message, data) {
    if (this.isWindowAvailable()) {
      this.window.webContents.send(message, data);
    }
  }

  toggleDevTools() {
    if (this.isWindowAvailable()) this.window.webContents.toggleDevTools();
  }
}

module.exports = new Window();

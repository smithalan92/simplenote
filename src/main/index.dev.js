/**
 * This file is used specifically and only for development. It installs `vue-devtools`
 * and 'devtron'.
 */

/* eslint-disable */

const { app } = require('electron');

// Install `vue-devtools`
app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })

  // Install 'devtron'
  require('devtron').install();
})

// Require `main` process to boot app
require('./index')

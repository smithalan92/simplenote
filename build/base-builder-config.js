module.exports =  {
  productName: "SimpleNote",
  appId: "Simple.Note",
  npmRebuild: false,
  directories: {
    "output": "dist"
  },
  files: [
    "dist/SimpleNote/**/*"
  ],
  dmg: {
    background: "./build/assets/dmgbackground.png",
    window: {
      width: 450,
      height: 350
    },
    contents: [
      {
        x: 225,
        y: 10
      },
      {
        x: 225,
        y: 180,
        type: "link",
        path: "/Applications"
      }
    ]
  },
  mac: {
    category: "app-category.business",
    target: [
      "dmg",
      "zip"
    ],
    asar: false,
    icon: "./build/assets/mac_icon.icns",
    publish: null
  },
  squirrelWindows: {
    iconUrl: "https://github.com/smithalan92/simplenote/blob/master/build/assets/windows_icon.ico",
    loadingGif: "./build/assets/windows_installer.gif"
  },
  win: {
    target: "squirrel",
    asar: false,
    icon: "./build/assets/windows_icon.ico",
    publish: null
  },
  linux: {
    target: "tar.gz",
    asar: false,
    publish: null
  }
}

const BrowserWindow = require('electron').BrowserWindow;

module.exports = {
  show: function(text) {
    var win = new BrowserWindow({
      transparent: true,
      alwaysOnTop: true,
      frame: false
    });
    win.maximize()
    win.loadURL('file://' + __dirname + '/assets/index.html#'+text);
  }
}

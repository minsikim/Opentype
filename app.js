const {app,BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;
const { setMainMenu } = require('./main-menu.js')

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 400,
    height: 300
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  })
  setMainMenu(mainWindow);
});

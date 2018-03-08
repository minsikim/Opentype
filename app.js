const {app,BrowserWindow,ipcMain} = require('electron');
const path = require('path');
let mainWindow;
const windows = [];

const { setMainMenu } = require('./menu.js')

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     show: false,
//     width: 800,
//     height: 600
//   });
//   mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
//   // mainWindow.loadURL(path.join('file://', __dirname, 'render.html'));
//   mainWindow.on('ready-to-show', () => {
//     mainWindow.show();
//   })
//   setMainMenu(mainWindow);
// });

app.on('ready', () => {
  createBrowserWindow();
  ipcMain.on('create-window', (event, props) => {
    createBrowserWindow(props);
  });
  ipcMain.on('get-window-count', sendWindowCount);
});

function createBrowserWindow(browserWindowOpts){
  let win = new BrowserWindow(Object.assign({
    width:400,
    height:300
  }, browserWindowOpts));

  windows.push(win);
  win.loadURL(path.join('file://', __dirname, 'render.html'));

  win.on('close', () => {
    windows.splice(windows.indexOf(win), 1);
  });
}

function sendWindowCount(){
  windows.forEach(win=>{
    win.webContents.send('window-count', {count: windows.length});
  })
}

const {app, Menu} = require('electron');
const isWindows = process.platform === 'win32';

module.exports = {
  setMainMenu
};

function setMainMenu(){
  const template = [
    {
      label: isWindows ? 'File' : app.getName(),
      // label : 'File',
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          // label: 'Exit',
          accelerator: isWindows ? 'Alt-F4' : 'CmdOrCtrl+Q',
          // accelerator: 'Alt-F4',
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'Dialogue',
      submenu: [
        {
          label: 'get Dialogue',
          accelarator: 'Ctrl+1',
          click(){
            
          }
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
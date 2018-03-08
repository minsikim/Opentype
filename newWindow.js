const {ipcRenderer} = require('electron');

document.querySelector('#new-window').addEventListener('click', ()=>{
  //app.js process listening for ipcRenderer, sends to it 'create-window'
  //2nd param is properties of the created window(x,y coordinates)
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
});

const {ipcRenderer} = require('electron');
const countEl = document.querySelector('#count');

ipcRenderer.on('window-count', (event, props) => {
  countEl.textContent = props.count
});

ipcRenderer.send('get-window-count');

document.querySelector('#new-window').addEventListener('click', ()=>{
  //app.js process listening for ipcRenderer, sends to it 'create-window'
  //2nd param is properties of the created window(x,y coordinates)
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
});

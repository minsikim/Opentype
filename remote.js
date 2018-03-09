const {remote} = require('electron');
const path =require('path');

document.querySelector('#new-window').addEventListener('click', ()=>{
  const win = new remote.BrowserWindow({
    height: 400,
    width: 400,
    x:0,
    y:0
  })
  win.loadURL(path.join('file://', __dirname, 'render.html'))
});

console.log(remote);

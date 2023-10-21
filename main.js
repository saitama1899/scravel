const { app, BrowserWindow } = require('electron')
const path = require('path')
const express = require('express')
const server = require('./server')

let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // URL de tu aplicación React en modo de desarrollo
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', async () => {
  // Inicia el servidor Express
  const expressApp = express();
  server(expressApp);

  await new Promise((resolve) => {
    expressApp.listen(3001, () => {
      console.log('Backend server is running on http://localhost:3001');
      resolve();
    });
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('quit', () => {
  // Cierra el servidor backend cuando la aplicación Electron se cierra
  // Asegúrate de cerrar correctamente tu servidor Express aquí si es necesario
});

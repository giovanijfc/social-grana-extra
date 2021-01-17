export const createBrowserWindow = (url) => {
  const { remote } = require("electron");

  const { height, width } = remote.screen.getPrimaryDisplay().workAreaSize;

  const win = new remote.BrowserWindow({
    height,
    width,
    center: true,
    maximizable: true,
  });

  win.loadURL(url);

  return win;
};

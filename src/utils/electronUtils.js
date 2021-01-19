export const createBrowserWindow = async (url, widthValue, heightValue) => {
  const { remote } = require("electron");

  const { height, width } = remote.screen.getPrimaryDisplay().workAreaSize;

  const win = new remote.BrowserWindow({
    height: heightValue || height,
    width: widthValue || width,
    center: true,
    maximizable: true,
    webPreferences: {
      contextIsolation: true,
    },
  });

  await win.loadURL(url);
  win.webContents.openDevTools({ mode: "bottom" });

  return win;
};

export const setNativeValue = (element, value) => {
  return `
          const valueSetter = Object.getOwnPropertyDescriptor(${element}, 'value').set;
          const prototype = Object.getPrototypeOf(${element});
          const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
          if (valueSetter && valueSetter !== prototypeValueSetter) {
              prototypeValueSetter.call(${element}, '${value}');
          } else {
              valueSetter.call(${element}, '${value}');
          }
  
          ${element}.dispatchEvent(new Event('input', { bubbles: true }));
      `;
};

export const findByTagWithTexts = (tagName, texts) => {
  const elementsToFind = document.getElementsByTagName(tagName);

  for (let i = 0; i < elementsToFind.length; i++) {
    const tag = elementsToFind[i];

    if (texts.includes(tag?.innerText || tag.value)) {
      return tag;
    }
  }

  return;
};

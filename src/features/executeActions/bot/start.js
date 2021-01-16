import { createBrowserWindow } from "../../../utils/electronUtils";

export const start = () => {
  const browserWindow = createBrowserWindow(
    "https://www.ganharnoinsta.com/painel/"
  );
  console.log(browserWindow);
};

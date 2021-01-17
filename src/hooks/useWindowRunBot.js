import { useState, useLayoutEffect } from "react";
import { WindowRunBot } from "../features/executeActions/bot/WindowRunBot";

const WindowRunBotInstance = WindowRunBot.getInstance();

export const useWindowRunBot = () => {
  const [windowRunBot, setWindowRunBot] = useState(undefined);

  useLayoutEffect(() => {
    if (windowRunBot) {
      windowRunBot.on("close", () => {
        setWindowRunBot(undefined);
        WindowRunBotInstance._window = undefined;
      });
    }
  }, [windowRunBot]);

  return { windowRunBot, setWindowRunBot };
};

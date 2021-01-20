import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { start } from "../bot/start";
import { useContext } from "react";
import AppContext from "../../../contexts/appContext";

const schema = yup.object().shape({
  numberFollowInEachAccount: yup.string(),
  timeSleepBeforeFollow: yup.string(),
  timeSleepAfterFollow: yup.string(),
  timeAwaitAfterFlowFollow: yup.string(),
});

export const useFormConfig = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      numberFollowInEachAccount: "",
      timeSleepBeforeFollow: "",
      timeSleepAfterFollow: "",
      timeAwaitAfterFlowFollow: "",
    },
  });

  const { setWindowRunBot } = useContext(AppContext);

  const onSubmitCustom = (config) => {
    config.numberFollowInEachAccount =
      parseInt(config.numberFollowInEachAccount, 0) || 6;
    config.timeSleepBeforeFollow =
      parseInt(config.timeSleepBeforeFollow, 0) || 8;
    config.timeSleepAfterFollow = parseInt(config.timeSleepAfterFollow, 0) || 8;
    config.timeAwaitAfterFlowFollow =
      parseInt(config.timeAwaitAfterFlowFollow, 0) || 30;

    start(setWindowRunBot, config);
  };

  return { form, onSubmitCustom };
};

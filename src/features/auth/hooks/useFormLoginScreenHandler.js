import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { login, register } from "../api/loginApis";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido.").required("Email obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve ter ao menos 6 caracteres")
    .required(),
});

export const useFormLoginScreenHandler = () => {
  const [buttonPressed, setButtonPressed] = useState("");
  const [errorMessageApi, setErrorMessageApi] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const history = useHistory();

  const mySubmitHandler = async ({ email, password }) => {
    setIsLoading(true);

    let response = {};

    if (buttonPressed === "Entrar") response = await login(email, password);
    else response = await register(email, password);

    response.type === "e"
      ? setErrorMessageApi(response.message)
      : successAuthenticateHandler();

    setIsLoading(false);
  };

  const successAuthenticateHandler = () => {
    history.replace("/");
  };

  const onButtonPress = (button) => {
    setButtonPressed(button);
    setErrorMessageApi("");
  };

  return { form, mySubmitHandler, onButtonPress, errorMessageApi, isLoading };
};

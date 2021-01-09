import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import RoutesContext from "../../../routes/RoutesContext";
import { addAccount } from "../api/editAccountsApis";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido.").required("Email obrigatório."),
  password: yup.string().required("Senha obrigatório."),
  nickname: yup.string().required("Apelido obrigatório."),
});

export const useFormAddAccountHandler = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
    },
  });

  const mySubmitHandler = async ({ email, password, nickname }) => {
    setIsLoading(true);

    await addAccount(email, password, nickname);

    form.reset({
      email: "",
      password: "",
      nickname: "",
    });

    setIsLoading(false);
  };

  return { form, mySubmitHandler, isLoading };
};

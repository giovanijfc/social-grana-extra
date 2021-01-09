import React from "react";
import styled from "styled-components";
import { Text, SIZE, FONT_WEIGHT } from "../../../components/Text";
import COLORS from "../../../styles/colors";
import { Input } from "../../../components/Input";
import { useFormLoginScreenHandler } from "../hooks/useFormLoginScreenHandler";
import { Button } from "../../../components/Button";

export const LoginScreen = () => {
  const {
    form,
    mySubmitHandler,
    onButtonPress,
    errorMessageApi,
    isLoading,
  } = useFormLoginScreenHandler();
  const { register, handleSubmit, errors } = form;

  return (
    <Container>
      <Form onSubmit={handleSubmit(mySubmitHandler)}>
        <Text
          style={{ marginBottom: "50px" }}
          size={SIZE.extraHigh}
          color={COLORS.white}
        >
          Entrar ou Cadastrar
        </Text>
        <Input
          ref={register}
          name="email"
          error={errors?.email?.message}
          maxLength={35}
          type="text"
          label="Email"
        />
        <Input
          ref={register}
          name="password"
          error={errors?.password?.message}
          maxLength={20}
          type="password"
          label="Senha"
          style={{ marginTop: "30px" }}
        />

        <WrapperButtonsOptions>
          <Button
            isLoading={isLoading}
            type="submit"
            onClick={() => onButtonPress("Entrar")}
            label="Entrar"
          />
          <Button
            isLoading={isLoading}
            type="submit"
            onClick={() => onButtonPress("Cadastrar")}
            label="Cadastrar"
          />
        </WrapperButtonsOptions>

        {errorMessageApi && (
          <Text
            color={COLORS.errorDark}
            fontWeight={FONT_WEIGHT.light}
            size={SIZE.regular}
            style={{ marginTop: "5px" }}
          >
            {errorMessageApi}
          </Text>
        )}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${COLORS.background};
`;

const Form = styled.form`
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapperButtonsOptions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
`;

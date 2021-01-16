import React from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useFormAddAccountHandler } from "../hooks/useFormAddAccountHandler";
import { IoAdd } from "react-icons/io5";
import COLORS from "../../../styles/colors";

export const AddAccount = () => {
  const { form, mySubmitHandler, isLoading } = useFormAddAccountHandler();
  const { register, errors, handleSubmit } = form;

  return (
    <Container>
      <Form onSubmit={handleSubmit(mySubmitHandler)}>
        <Input
          name="email"
          ref={register}
          error={errors?.email?.message}
          style={{ width: "23%" }}
          label="Email"
        />
        <Input
          name="password"
          ref={register}
          error={errors?.password?.message}
          style={{ width: "23%" }}
          label="Senha"
        />
        <Input
          name="nickname"
          ref={register}
          error={errors?.nickname?.message}
          style={{ width: "23%" }}
          label="Apelido"
        />

        <Button
          style={{
            height: "44px",
            alignSelf: "flex-end",
          }}
          label={<IoAdd color={COLORS.white} size="22px" />}
          type="submit"
          isLoading={isLoading}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

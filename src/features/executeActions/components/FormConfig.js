import React, { useContext } from "react";
import { Input } from "../../../components/Input";
import { useFormConfig } from "../hooks/useFormConfig";
import styled from "styled-components";
import AppContext from "../../../contexts/appContext";
import { start } from "../bot/start";
import { Button } from "../../../components/Button";

export const FormConfig = () => {
  const {
    form: { register, handleSubmit },
    onSubmitCustom,
  } = useFormConfig();
  const { windowRunBot } = useContext(AppContext);

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmitCustom)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          ref={register}
          name="numberFollowInEachAccount"
          maxLength={35}
          type="text"
          label="Numero de quantas vezes é para seguir na mesma conta"
          placeholder="O numero padrão é: 6 (Recomendado)"
        />
        <Input
          ref={register}
          name="timeSleepBeforeFollow"
          maxLength={20}
          type="text"
          label="T. de espera antes de seguir (Segundos)"
          style={{ marginTop: "30px" }}
          placeholder="O tempo padrão é: 8 (Recomendado)"
        />
        <Input
          ref={register}
          name="timeSleepAfterFollow"
          maxLength={35}
          type="text"
          label="T. de espera depois de seguir (Segundos)"
          placeholder="O tempo padrão é: 8 (Recomendado)"
          style={{ marginTop: "30px" }}
        />
        <Input
          ref={register}
          name="timeAwaitAfterFlowFollow"
          maxLength={20}
          type="text"
          label="T. de espera de cada conta apos completar o fluxo de seguir (Minutos)"
          placeholder="O tempo padrão é: 30 (Recomendado)"
          style={{ marginTop: "30px" }}
        />

        <Button
          type="submit"
          label={windowRunBot ? "Parar" : "Começar"}
          style={{ marginTop: "30px" }}
        />
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
`;

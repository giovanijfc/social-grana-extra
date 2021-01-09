import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "./Button";

import { BiArrowBack } from "react-icons/bi";
import RoutesContext from "../routes/RoutesContext";

export const BackButton = () => {
  const { setCurrentRoute } = useContext(RoutesContext);

  const onClickBackHandler = () => {
    setCurrentRoute("/");
  };

  return (
    <Container>
      <Button onClick={onClickBackHandler} label={<BiArrowBack />} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;

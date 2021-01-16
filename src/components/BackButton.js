import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  const onClickBackHandler = () => {
    history.goBack();
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

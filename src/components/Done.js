import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import TrashIcon from "@atlaskit/icon/glyph/trash";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;

export default function done({ done, OnRemoveBtnDoneClick }) {
  return (
    <>
      <ButtonStyled
        shouldFitContainer
        iconAfter={
          <>
            <span
              className="trashIcon"
              onClick={() => OnRemoveBtnDoneClick(done.id)}
            >
              <TrashIcon primaryColor="red" />
            </span>
          </>
        }
        style={{ textDecoration: done.isCompleted ? "line-through" : "" }}
      >
        {done.name}
      </ButtonStyled>
    </>
  );
}

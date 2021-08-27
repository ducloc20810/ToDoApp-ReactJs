import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from "@atlaskit/icon/glyph/trash";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,
  &:hover {
    ${(p) => p.isCompleted && css``}
  }

  &:hover {
    .checkIcon {
      visibility: visible;
    }
  }
  .checkIcon {
    visibility: hidden;

    &:hover {
      background-color: "black";
      border-radius: 3px;
    }
  }
`;

export default function Todo({ todo, OnCheckBtnClick, OnRemoveBtnClick }) {
  return (
    <>
      <ButtonStyled
        shouldFitContainer
        iconAfter={
          <>
            <span
              className="checkIcon"
              onClick={() => OnCheckBtnClick(todo.id)}
              style={{ visibility: todo.isCompleted ? "hidden" : "" }}
            >
              <CheckIcon primaryColor="green" />
            </span>

            <span
              className="trashIcon"
              onClick={() => OnRemoveBtnClick(todo.id)}
            >
              <TrashIcon primaryColor="red" />
            </span>
          </>
        }
      >
        {todo.name}
      </ButtonStyled>
    </>
  );
}

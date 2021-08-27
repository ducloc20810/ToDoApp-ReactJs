import React from "react";
import Done from "./Done";

export default function DoneList({ doneList, OnRemoveBtnDoneClick }) {
  return (
    <>
      {doneList.map((done) => (
        <Done
          key={done.id}
          done={done}
          OnRemoveBtnDoneClick={OnRemoveBtnDoneClick}
        />
      ))}
    </>
  );
}

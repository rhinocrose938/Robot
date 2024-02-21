import React from "react";
import Cell from "./Cell";
import { Mydiv } from "./StyledComponents";

function Table({ coordinates }) {
  return (
    <Mydiv data-testid={"Table"}>
      {coordinates.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <Cell key={j} obj={cell} />
          ))}
        </div>
      ))}
    </Mydiv>
  );
}

export default Table;

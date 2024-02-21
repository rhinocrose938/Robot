import React from "react";
import { Iconbutton, IconContainer, Icon } from "./StyledComponents";

function Cell({ obj }) {
  function getIconWithDirection(direction) {
    switch (direction) {
      case "North":
        return <Icon>&rarr;</Icon>;
      case "South":
        return <Icon>&larr;</Icon>;
      case "East":
        return <Icon>&darr;</Icon>;
      case "West":
        return <Icon>&uarr;</Icon>;
      default:
        return <Icon>&rarr;</Icon>;
    }
  }
  return (
    <Iconbutton data-testid={"Cell"}>
      <IconContainer>
        {obj.occupied ? getIconWithDirection(obj.dir) : null}
      </IconContainer>
    </Iconbutton>
  );
}

export default Cell;

export const updateData = (coordinates, xValue, yValue, facing) => {
  return coordinates.map((row) => {
    return row.map((elem) => {
      if (elem.x === xValue && elem.y === yValue) {
        return {
          ...elem,
          dir: facing,
          occupied: true,
        };
      } else {
        return elem;
      }
    });
  });
};

export const getFinalDirectionLeftTurn = (input) => {
  let result;
  switch (input) {
    case "North":
      result = "West";
      break;
    case "South":
      result = "East";
      break;
    case "East":
      result = "North";
      break;
    case "West":
      result = "South";
      break;
    default:
      result = "North";
      break;
  }
  return result;
};

export const getFinalDirectionRightTurn = (input) => {
  let result;
  switch (input) {
    case "North":
      result = "East";
      break;
    case "South":
      result = "West";
      break;
    case "East":
      result = "South";
      break;
    case "West":
      result = "North";
      break;
    default:
      result = "North";
      break;
  }
  return result;
};

export const updateDataWithLeftTurn = (coordinates, xValue, yValue, facing) => {
  return coordinates.map((row) => {
    return row.map((elem) => {
      if (elem.x === xValue && elem.y === yValue) {
        return {
          ...elem,
          dir: getFinalDirectionLeftTurn(facing),
          occupied: true,
        };
      } else {
        return elem;
      }
    });
  });
};

export const updateDataWithRightTurn = (
  coordinates,
  xValue,
  yValue,
  facing
) => {
  return coordinates.map((row) => {
    return row.map((elem) => {
      if (elem.x === xValue && elem.y === yValue) {
        return {
          ...elem,
          dir: getFinalDirectionRightTurn(facing),
          occupied: true,
        };
      } else {
        return elem;
      }
    });
  });
};

export function placeRobot(
  e,
  coordinates,
  xValue,
  yValue,
  facing,
  setTableData,
  setPlaced,
  showPosition,
  setEdgeReached
) {
  e.preventDefault();
  const updatedTableData = updateData(coordinates, xValue, yValue, facing);
  setTableData(updatedTableData);
  setPlaced(true);
  showPosition(false);
  setEdgeReached(false);
}

export function moveRobot(
  coordinates,
  xValue,
  setxValue,
  yValue,
  setyValue,
  facing,
  setTableData,
  setPlaced,
  showPosition,
  setEdgeReached
) {
  if (facing === "North" && yValue < 4) {
    const updatedTableData = updateData(
      coordinates,
      xValue,
      yValue + 1,
      facing
    );
    setTableData(updatedTableData);
    setyValue((prev) => prev + 1);
    setPlaced(true);
    showPosition(false);
    setEdgeReached(false);
  } else if (facing === "South" && yValue > 0) {
    const updatedTableData = updateData(
      coordinates,
      xValue,
      yValue - 1,
      facing
    );
    setTableData(updatedTableData);
    setyValue((prev) => prev - 1);
    setPlaced(true);
    showPosition(false);
    setEdgeReached(false);
  } else if (facing === "East" && xValue < 4) {
    const updatedTableData = updateData(
      coordinates,
      xValue + 1,
      yValue,
      facing
    );
    setTableData(updatedTableData);
    setxValue((prev) => prev + 1);
    setPlaced(true);
    showPosition(false);
    setEdgeReached(false);
  } else if (facing === "West" && xValue > 0) {
    const updatedTableData = updateData(
      coordinates,
      xValue - 1,
      yValue,
      facing
    );
    setTableData(updatedTableData);
    setxValue((prev) => prev - 1);
    setPlaced(true);
    showPosition(false);
    setEdgeReached(false);
  } else {
    setEdgeReached(true);
  }
}

export const turnRobotLeft = (
  coordinates,
  xValue,
  yValue,
  facing,
  setTableData,
  setPlaced,
  showPosition,
  setFacing,
  updateDataWithLeftTurn,
  getFinalDirectionLeftTurn,
  setEdgeReached
) => {
  const updatedTableData = updateDataWithLeftTurn(
    coordinates,
    xValue,
    yValue,
    facing
  );
  setTableData(updatedTableData);
  setPlaced(true);
  showPosition(false);
  setFacing(getFinalDirectionLeftTurn(facing));
  setEdgeReached(false);
};

export const turnRobotRight = (
  coordinates,
  xValue,
  yValue,
  facing,
  setTableData,
  setPlaced,
  showPosition,
  setFacing,
  updateDataWithRightTurn,
  getFinalDirectionRightTurn,
  setEdgeReached
) => {
  const updatedTableData = updateDataWithRightTurn(
    coordinates,
    xValue,
    yValue,
    facing
  );
  setTableData(updatedTableData);
  setPlaced(true);
  showPosition(false);
  setFacing(getFinalDirectionRightTurn(facing));
  setEdgeReached(false);
};

import React, { useState } from "react";
import Table from "./Table";
import { coordinates } from "./coordinates";
import {
  placeRobot,
  moveRobot,
  turnRobotLeft,
  turnRobotRight,
  getFinalDirectionLeftTurn,
  getFinalDirectionRightTurn,
  updateDataWithRightTurn,
  updateDataWithLeftTurn,
} from "./utils";
import {
  StyledMainContainer,
  StyledInputNumber,
  StyledLabelNumber,
  StyledRadioInput,
  StyledButton,
  StyledFirstColumn,
  StyledSecondColumn,
  StyledForm,
  StyledRadioGroup,
  StyledButtonGroup,
  StyledLabelRadio,
  StyledHeadingFour,
  StyledHeadingFive,
} from "./StyledComponents";

function Operator() {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [facing, setFacing] = useState("North");
  const [tableData, setTableData] = useState(coordinates);
  const [placed, setPlaced] = useState(false);
  const [position, showPosition] = useState(false);
  const [edgeReached, setEdgeReached] = useState(false);
  const [validationMessageX, setValidationMessageX] = useState(false);
  const [validationMessageY, setValidationMessageY] = useState(false);
  const handleSubmit = (e) =>
    placeRobot(
      e,
      coordinates,
      xValue,
      yValue,
      facing,
      setTableData,
      setPlaced,
      showPosition,
      setEdgeReached
    );
  const move = () =>
    moveRobot(
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
    );

  const turnLeft = () =>
    turnRobotLeft(
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
    );

  const turnRight = () =>
    turnRobotRight(
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
    );

  return (
    <StyledMainContainer data-testid={"Operator"}>
      <StyledFirstColumn>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabelNumber htmlFor="x-coordinates">
            Enter the x-direction coordinates: (0 to 4)
          </StyledLabelNumber>
          <StyledInputNumber
            type="number"
            id="x-coordinates"
            value={xValue}
            onChange={(e) => {
              if (
                parseInt(e.target.value) > 4 ||
                parseInt(e.target.value) < 0
              ) {
                setValidationMessageX(true);
              } else {
                setxValue(parseInt(e.target.value));
                setValidationMessageX(false);
              }
            }}
          ></StyledInputNumber>
          {validationMessageX ? (
            <span style={{fontSize: '14px'}}>Please enter value between 0 and 4 (both included)</span>
          ) : null}
          <StyledLabelNumber htmlFor="y-coordinates">
            Enter the y-direction coordinates: (0 to 4)
          </StyledLabelNumber>
          <StyledInputNumber
            type="number"
            id="y-coordinates"
            value={yValue}
            onChange={(e) => {
              if (
                parseInt(e.target.value) > 4 ||
                parseInt(e.target.value) < 0
              ) {
                setValidationMessageY(true);
              } else {
                setyValue(parseInt(e.target.value));
                setValidationMessageY(false);
              }
            }}
          ></StyledInputNumber>
          {validationMessageY ? (
            <span style={{fontSize: '14px'}}>Please enter value between 0 and 4 (both included)</span>
          ) : null}
          <StyledRadioGroup>
            <StyledRadioInput
              type="radio"
              id="North"
              value="North"
              checked={facing === "North"}
              onChange={() => setFacing("North")}
            />
            <StyledLabelRadio htmlFor="North">North</StyledLabelRadio>
            <StyledRadioInput
              type="radio"
              id="West"
              value="West"
              checked={facing === "West"}
              onChange={() => setFacing("West")}
            />
            <StyledLabelRadio htmlFor="West">West</StyledLabelRadio>
            <StyledRadioInput
              type="radio"
              id="East"
              value="East"
              checked={facing === "East"}
              onChange={() => setFacing("East")}
            />
            <StyledLabelRadio htmlFor="East">East</StyledLabelRadio>
            <StyledRadioInput
              type="radio"
              id="South"
              value="South"
              checked={facing === "South"}
              onChange={() => setFacing("South")}
            />
            <StyledLabelRadio htmlFor="South">South</StyledLabelRadio>
          </StyledRadioGroup>
          <StyledButton type="submit">Place me on table</StyledButton>
        </StyledForm>
        <StyledButtonGroup>
          <StyledButton
            type="submit"
            disabled={!placed}
            onClick={() => turnLeft()}
          >
            {placed ? "Turn Left" : "disabled"}
          </StyledButton>
          <StyledButton
            type="submit"
            disabled={!placed}
            onClick={() => turnRight()}
          >
            {placed ? "Turn Right" : "disabled"}
          </StyledButton>
          <StyledButton type="submit" disabled={!placed} onClick={() => move()}>
            {placed ? "Move Ahead" : "disabled"}
          </StyledButton>
          <StyledButton
            type="submit"
            disabled={!placed}
            onClick={() => showPosition(true)}
          >
            {placed ? "Report" : "disabled"}
          </StyledButton>
        </StyledButtonGroup>
      </StyledFirstColumn>
      <StyledSecondColumn>
        <Table coordinates={tableData} />
        {edgeReached && (
          <StyledHeadingFive>
            I am at the edge of the table cannot move ahead
          </StyledHeadingFive>
        )}
        {placed && position && (
          <StyledHeadingFour>
            Position x: {xValue}, y: {yValue}, {facing}
          </StyledHeadingFour>
        )}
      </StyledSecondColumn>
    </StyledMainContainer>
  );
}

export default Operator;

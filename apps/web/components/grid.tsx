import React from "react";
import styled from "styled-components";

interface GridProps {
  data: any[]; // Assuming the data is an array of objects
}

const GridContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin: auto;
  width: 95vw;
  height: 98vh;
`;

const GridItem = styled.div`
  flex-basis: 49%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid: React.FC<GridProps> = ({ data }) => {
  return (
    <GridContainer>
      {data.map((item, index) => (
        <GridItem key={index}>{item.content}</GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;

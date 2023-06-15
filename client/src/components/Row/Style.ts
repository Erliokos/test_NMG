import styled from "styled-components";


export const MainRow = styled.div<{columnsCount: number}>`
  display: grid;
  grid-template-columns: ${({ columnsCount }) => `repeat(${columnsCount}, 1fr)`};
  width: 100%;
  height: 30px;
  background-color: darkgray;
  color: white;
  margin: 4px;
  padding: 4px;
`

export const Delete = styled.button`
  background-color: red;
`

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
`

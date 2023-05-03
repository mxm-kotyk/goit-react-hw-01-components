import styled from "styled-components";

export const TableCell = styled.td`
  padding: 14px;
  text-align: center;
  border-left: 1px solid #ccc;

  &:first-child {
  text-transform: capitalize;
  text-align: left;
  padding-left: 5vw;
  border-left: none;
}
`

export const TableRow = styled.tr`
  &:nth-child(even) {
  background-color: #e7e7e7;
}
`
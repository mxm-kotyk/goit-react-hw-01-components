import styled from "styled-components";

export const TableHead = styled.thead`
  background-color: cornflowerblue;
  color: #fff;
  text-transform: uppercase;
`

export const TableHeadCell = styled.th`
  width: 200px;
  padding: 14px;

  &:not(:first-child) {
  border-left: 1px solid #ccc;
}
` 
import styled from "styled-components";

export const Stats = styled.ul`  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background-color: #F3F6F9;
  border-top: 1px solid #E4E9F0;

  &:not(:first-child) {
  border-left: 1px solid #E4E9F0;
}
`

export const Label = styled.span`
  font-size: 12px;
`

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700
`

// export const  = styled.``

// export const  = styled.``
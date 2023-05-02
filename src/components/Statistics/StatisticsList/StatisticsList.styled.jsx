import styled from "styled-components";
import { getRandomHexColor } from 'utils/getRandomHexColor'


export const StatList = styled.ul`
  min-width: 400px;
  display: grid;
  grid-auto-rows: 80px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor} 
`

export const Label = styled.span`
  font-size: 18px;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
`

export const Percentage = styled(Label)``
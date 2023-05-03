import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 300px;
  height: 80px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`

export const Name = styled.p`
  font-weight: 500;
`

export const Status = styled.span`
  justify-self: start;
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ available }) => {
    return available ? 'rgb(47, 201, 47)' : 'rgb(240, 53, 53)'
  }}
`

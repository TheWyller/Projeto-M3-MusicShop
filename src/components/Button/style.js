import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 50%;
  height: 30px;
  border: none;
  background-color: Var(--Color-primary-Negative);
  color: antiquewhite;
  border-radius: 5px;
  &:hover {
    filter: brightness(130%);
  }
`;

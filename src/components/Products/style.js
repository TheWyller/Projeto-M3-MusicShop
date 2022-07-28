import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: scroll;
  padding: 30px;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: unset;

    justify-content: center;
  }
`;

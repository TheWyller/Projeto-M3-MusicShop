import styled from "styled-components";

export const Conteiner = styled.section`
  width: 90vw;
  margin: 50px auto;
  max-width: 500px;
  background-color: var(--Grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 10px;
  border-radius: 10px;
  h1 {
    color: var(--Grey-3);
  }
  button {
    margin-top: 20px;
    @media (min-width: 768px) {
      margin-top: 30px;
      height: 50px;
    }
  }
`;

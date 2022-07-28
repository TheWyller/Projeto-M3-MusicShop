import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 250px;
  padding-bottom: 20px;
  background-color: var(--Grey-4);
  color: aliceblue;
  border-radius: 10px;
  gap: 10px;
  img {
    width: 200px;
    border-radius: 10px;
    margin: 20px 20px 0 20px;
  }

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
  }
  h2,
  p {
    padding: 0 20px;
  }
  p {
    text-align: left;
  }
`;

export const ContainerCart = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 250px;
  padding-bottom: 20px;
  background-color: var(--Grey-4);
  color: aliceblue;
  border-radius: 10px;
  gap: 10px;
  img {
    width: 50px;
    border-radius: 10px;
    margin: 20px 20px 0 20px;
  }
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
  }
  h2,
  p {
    padding: 0 20px;
  }
  h2 {
    font-size: 12px;
  }

  p {
    text-align: left;
  }
`;

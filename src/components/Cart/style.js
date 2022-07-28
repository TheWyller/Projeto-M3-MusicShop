import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 3px solid var(--Grey-2);
  border-radius: 20px;
  padding-top: 20px;
  background-color: antiquewhite;
  width: 90%;
  margin: 20px auto;

  max-width: 400px;

  .emptyCart {
    text-align: center;
    padding: 90px 0;
    width: 90%;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
    color: var(--Grey-2);
  }
`;
export const ContainerCheckout = styled.section`
  background-color: var(--Grey-2);
  width: 100%;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: aliceblue;
  padding: 20px 0 20px 0;
  gap: 20px;
  align-items: center;
`;

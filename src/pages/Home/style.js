import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);

  background-color: aliceblue;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 50px 50px 50px;
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 3px;
    p:nth-of-type(1) {
      color: var(--Color-primary-Focus);
    }
    p:nth-of-type(2) {
      font-weight: 500;
      font-size: 20px;
      padding-top: 7px;
      font-style: italic;
    }
    margin-bottom: 20px;
  }

  .welcome {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    p:nth-of-type(1) {
      font-weight: bold;
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 5px;
      width: 100%;
      max-width: 300px;
      .numCart {
        text-align: center;
        padding: 2px 2px 1px 1px;
        color: antiquewhite;
        font-weight: bold;

        width: 30px;
        height: 25px;

        border-radius: 50%;
        background-color: var(--Negative);
      }
    }
  }
`;

export const Main = styled.main``;

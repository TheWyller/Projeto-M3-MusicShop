import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: var(--Grey-3);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  background-color: aliceblue;
  padding: 20px 20px 20px 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 50px 50px 50px;
  }
  button {
    max-width: 200px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

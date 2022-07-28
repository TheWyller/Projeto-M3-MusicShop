import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;
  @media (min-width: 375px) {
    margin-bottom: unset;
  }
  &:nth-last-of-type(1) {
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    height: 38.38px;
    @media (min-width: 768px) {
      height: 48.38px;
    }
    border: none;
    background: var(--Grey-2);
    border-radius: 3.19812px;
    font-size: 13px;
    @media (min-width: 768px) {
      font-size: 17px;
    }
    padding: 8.2px 13px;

    box-sizing: border-box;
    &::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.2px;
      @media (min-width: 768px) {
        font-size: 16.2426px;
      }
      line-height: 21px;
      color: var(--Grey-1);
    }
    color: var(--Grey-0);
    &:focus {
      border: 1px solid var(--Grey-0);
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
    @media (min-width: 375px) {
      margin-bottom: unset;
    }
    @media (min-width: 768px) {
      font-size: 19px;
    }
    line-height: 0px;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 375px) {
      flex-wrap: unset;
    }
    align-items: flex-end;
    align-content: center;
    gap: 10px;

    height: 30px;
    @media (min-width: 375px) {
      flex-wrap: unset;
      margin-bottom: 15px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 0px;
      color: var(--Grey-3);
      margin-bottom: 5px;
      @media (min-width: 375px) {
        margin-bottom: unset;
      }
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }

  ${(props) =>
    props.isErrored &&
    css`
      input {
        border: 1px solid var(--Negative);
      }
      span {
        color: var(--Negative);
      }
    `}
`;

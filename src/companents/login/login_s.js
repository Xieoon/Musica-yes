import styled from "styled-components";

export const blackBox = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const loginBox = styled.div`
  flex-direction: column;
  padding-top: 45px;
  width: 366px;
  height: 439px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const logo = styled.img`
  width: 140px;
  height: 21px;
`;
export const loginInput = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  width: 178px;
  padding-bottom: 8px;
  &::placeholder {
    font-family: "StratosSkyeng";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #e1e1e1;
  }
  margin-top: 40px;
  margin-bottom: 46px;
`;

export const passwordInput = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  width: 178px;
  padding-bottom: 8px;
  &::placeholder {
    font-family: "StratosSkyeng";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #e1e1e1;
  }
`;
export const buttonIn = styled.button`
  width: 278px;
  height: 51px;
  background: #580ea2;
  border-radius: 6px;
  border: none;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.003em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 21px;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271A58;
  }
`;
export const buttonReg = styled.button`
  width: 278px;
  height: 52px;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.003em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin-bottom: 47px;
  &:hover {
    background-color: #d0cece;
  }
  &:active {
    background-color: #bab6b6;
  }
`;

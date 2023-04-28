import styled from "styled-components";

export const filterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  border-radius: 60px;
  padding: 6px 20px;
`;

export const filterButtonDropdown = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  background-color: #313131;
  border-radius: 12px;
  margin-top: 10px;
`;

export const filterButtonContent = styled.div`
  width: 180px;
  height: 237px;
  margin: 34px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 28px;
  font-family: StratosSkyeng;
  font-style: Regular;
  font-size: 20px;
  line-height: 24px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background-color: #4b4949;
    width: 4px;
    height:237px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height:65px;
    background-color: #fff;
  }
`;

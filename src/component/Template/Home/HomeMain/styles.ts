import styled from "styled-components";

export const HomemainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 12px;
  & .homeBannerNone {
    margin-top: 113px;
  }
`;

export const HomeBannerHeader = styled.header`
  width: 100vw;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 160px;
  padding-right: 14px;

  & > button {
    margin-right: 1%;
  }

  & > img {
    margin-right: 5rem;
  }
`;

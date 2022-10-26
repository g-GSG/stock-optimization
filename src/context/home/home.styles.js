import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  font-family: Roboto, sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  text-align: left;
`;

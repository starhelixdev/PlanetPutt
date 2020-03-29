import styled, { createGlobalStyle } from "styled-components";

interface IGameUI {
  width: number;
  height: number;
}

export const GlobalStyle = createGlobalStyle`
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const GameUI = styled.div<IGameUI>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
`;

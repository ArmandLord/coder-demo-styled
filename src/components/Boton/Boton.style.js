import styled from "styled-components";

export const Div = styled.div`
  background: yellow;
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotonUno = styled.button`
  background: ${(props) => (props.bg ? "#000" : "#fff")}; //true
  color: ${(p) => (p.co ? "#fff" : "#000")};
`;

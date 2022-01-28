import styled from "styled-components";
import { FaBacteria } from "react-icons/fa";

export const Nav = styled.div`
  background: yellow;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 10px;
  display: flex;
  align-items: center;

  .div {
    width: 60%;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        &:hover {
          color: #f1f1f1;
        }
      }
    }
  }
`;

export const IconBac = styled(FaBacteria)`
  color: red;
  font-size: 2rem;
  &:hover {
    color: pink;
  }
`;

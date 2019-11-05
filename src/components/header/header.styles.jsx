import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #4fa6d8;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  margin-left: 2rem;
`;

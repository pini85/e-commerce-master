import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #4fa6d8;
  justify-content: space-between;
  @media only screen and (max-width: 37.5em) {
    height: 50px;
  }
`;

export const LogoContainer = styled(Link)`
  margin-left: 2rem;
`;

export const LogoStyles = styled.div`
  height: 8rem;
  width: 8rem;
`;

export const OptionContainer = styled.div`
  color: var(--color-text-light);
  display: flex;
  margin-right: 4rem;
`;

export const Option = styled.div`
  position: relative;
  margin-left: 2rem;
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    transform: scale(0);
    transform-origin: left;
    transition: all 0.5s ease;
  }
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    top: 26px;
    left: 0;
    background-color: white;
    transform: scale(0);
    transform-origin: right;
    transition: all 0.5s ease;
  }
  &:hover:before,
  &:hover:after {
    transform: scale(1);
  }
`;

export const OptionText = styled(Link)`
  font-size: 1.5rem;
  color: white;
  letter-spacing: 0.1em;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 0.9px #fff, 0 0 0.9px #fff;
  }
`;

export const CartStyles = styled.div`
  margin-left: 2rem;
  cursor: pointer;
`;

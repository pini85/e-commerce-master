import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  perspective: 150rem;
  display: inline-block;
  padding: 0 5%;
  width: 100%;
  border-radius: 5px;
`;

export const CardHoverLayer = styled.div`
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 90%;
  background-color: rgba(250, 250, 250, 0.7);
  z-index: 998;

  &:hover .card__layer {
    opacity: 1;
  }
  &:hover .card__hover {
    opacity: 0.8;
  }
`;

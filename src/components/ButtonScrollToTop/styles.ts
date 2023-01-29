import styled from "styled-components";

export const ScrollContainer = styled.div`
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: fixed;
  display: flex;
  align-items: center;
  left: 16px;
  top: 16px;

  animation: show 1s ease;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  :hover {
    opacity: 0.7;
  }
`;

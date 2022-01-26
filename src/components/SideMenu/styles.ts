import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 2;
  height: 100vh;
  width: 20%;
  @media (max-width: 720px) {
    width: 55%;
  }

  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0 1.5rem;
  background-color: var(--black-300);

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.9);
    }
  }

  nav > ul {
    list-style: none;
    li {
      color: var(--pure-white);
      font-size: 1.5rem;

      @media (max-width: 720px) {
        font-size: 1.8rem;
      }

      cursor: pointer;

      transition: color 0.2s ease, text-decoration 0.2s ease;
      &:hover {
        color: var(--purple-300);
        text-decoration: underline;
      }

      & + li {
        margin-top: 2rem;
      }
    }
  }
`;

const BackgroundShadow = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

export { BackgroundShadow, Container };

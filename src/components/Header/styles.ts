import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  justify-content: space-between;

  background-color: var(--black-700);

  div {
    padding: 0px 50px;
  }

  button {
    height: 50px;
    width: 120px;
    margin-right: 50px;

    @media (max-width: 720px) {
      height: 40px;
      width: 80px;
      margin-right: 30px;
    }

    background-color: var(--purple-300);

    font-size: 18px;

    border: 1px solid var(--purple-500);
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export default Container;

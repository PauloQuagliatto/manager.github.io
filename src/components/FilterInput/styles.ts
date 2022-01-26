import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1.8rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 15px;
  background-color: var(--pure-white);
  border-radius: 8px;
  border: 1px solid var(--black-500);
  
  input {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0px;

    font-size: 1.2rem;
    font-family: "Roboto Condensed";

    :focus {
      outline: none;
    }
  }

  &:focus-within {
    border: 1px solid var(--purple-300);
  }
`;

export default Container;

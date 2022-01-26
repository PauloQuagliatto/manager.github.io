import styled from "styled-components";

const Container = styled.form`
  h2 {
    color: var(--white-200);
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    #image-picker-label {
      height: auto;
      width: 6.5rem;
      display: flex;
      justify-content: center;
      margin-right: 0.5rem;
      padding: 0.2rem;
      background-color: var(--white-200);

      border-radius: 8px;

      cursor: pointer;

      transition: filter 0.2s ease-in-out;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  input {
    width: 92%;
    padding: 0 1.5rem;
    height: 3.6rem;
    border-radius: 8px;

    border: 1px solid var(--white-500);
    background: var(--white-200);

    font-weight: 400;
    font-size: 1.5rem;

    &::placeholder {
      color: var(--black-700);
    }

    &:focus {
      outline: none;
      border: 2px solid var(--purple-300);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    padding: 0px;

    select {
      width: 100%;
      padding: 0 1.5rem;
      height: 3.6rem;
      margin-right: 8px;
      border-radius: 8px;
      border: 1px solid var(--white-500);
      background: var(--white-200);

      font-family: "Roboto Condensed";
      font-weight: 400;
      font-size: 1.5rem;

      &::placeholder {
        color: var(--black-700);
      }

      option {
        font-family: "Roboto Condensed";
        font-size: 1rem;

        & + option {
          margin-top: 3rem;
        }
      }
    }

    .no-more-space {
      width: 82%;
      margin-right: 8px;
    }

    .has-more-space {
      width: 100%;
    }

    button {
      width: 12%;
      height: 3.6rem;
      background-color: var(--white-200);
      color: var(--black-700);

      border: none;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
      border-radius: 8px;
    }
  }

  p {
    font-size: 16px;
    font-family: "Roboto Condensed";
  }
  #arrow-icon-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .functional-icon {
    cursor: pointer;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green-500);
    border-radius: 8px;
    border: 0;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export default Container;

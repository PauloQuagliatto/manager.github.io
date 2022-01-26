import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 785px) {
    justify-content: center;
    align-items: center;
  }

  aside {
    display: flex;
    flex: 7;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 80px 80px;

    p {
      overflow: hidden;
      width: auto;
      height: auto;
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      padding-bottom: 18px;
    }
  }

  main {
    flex: 8;

    background-color: var(--black-500);
    padding: 0px 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    .form-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      padding: 50px;
      background-color: var(--black-300);
      align-items: stretch;
      text-align: center;

      border-radius: 8px;

      form {
        input {
          height: 3.5rem;
          margin-top: 8px;
          padding: 0 16px;
          background: var(--pure-white);

          font-family: "Roboto Condensed", sans-serif;
          font-size: 20px;

          border: 1px solid var(--white-300);
          border-radius: 8px;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border: 1px solid var(--purple-300);
          }
        }

        .password-input {
          height: 3.5rem;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          margin: 0.5rem 0rem 0rem 0rem;
          padding-right: 0.4rem;

          background: var(--pure-white);

          font-family: "Roboto Condensed", sans-serif;
          font-size: 20px;

          border: 1px solid var(--white-300);
          border-radius: 8px;
          box-sizing: border-box;

          &:focus-within {
            border: 1px solid var(--purple-300);
          }

          > input {
            width: 95%;
            margin: 0;

            border: none;
            &:focus {
              outline: none;
              border: none;
            }
          }

          > .icon-container {
            margin: 0;
            padding: 0;
            background: none;
            border: none;

            cursor: pointer;
          }
        }

        button {
          height: 3rem;
          justify-content: center;
          background-color: var(--green-300);
          margin-top: 16px;
          padding: 10px;

          border: none;
          border-radius: 4px;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }

        input,
        button {
          width: 100%;
        }
      }

      p,
      span {
        font-size: 16px;
      }

      p > span {
        color: var(--orange-500);
        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export default Container;

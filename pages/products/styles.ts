import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 100%;
  background-color: var(--black-300);

  padding: 30px 80px;

  .title-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h2 {
      font-size: 2.4rem;
    }

    button {
      background-color: var(--green-100);
      padding: 10px;

      border: 1px solid var(--green-300);
      border-radius: 8px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  h5 {
    font-size: 1.6rem;
  }

  .wrapper {
    overflow-y: scroll;
    display: block;
   
    .active {
      margin-top: 0.6rem;
      color: var(--green-300);
    }

    .inactive {
      color: var(--red-300);
    }

    .separator {
      width: 100%;
      height: 1px;
      margin: 1rem 0;
      background-color: var(--purple-100);

      border-radius: 8px;
    }

    table {
      width: 100%;

      thead {
        > tr > th {
          text-align: left;
          color: var(--pure-white);
          font-size: 1.6rem;
          font-family: "Roboto Condensed";
        }
      }

      tbody > tr {
        height: 30px;

        transition: filter 0.2s ease-out;
        &:hover {
          filter: brightness(0.9);
        }

        > td {
          color: var(--pure-white);
          font-size: 1.4rem;
          font-family: "Pacifico";

          .icon {
            cursor: pointer;

            transition: color 0.2s ease;
            &:hover {
              color: var(--purple-300);
            }
          }
        }
      }
    }
  }
`;

export default Container;

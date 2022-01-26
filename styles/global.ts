import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --black-700: #13131F;
    --black-500: #282738;
    --black-300: #434253;

    --purple-700: #521D6B;
    --purple-500: #75249B;
    --purple-300: #A74DD2;
    --purple-100: #DDAAF5;

    --pure-white: #FFFFFF;
    --white-200: #F1F1F1;
    --white-300: #CBCBCB;
    --white-500: #929292;

    --red-700: #761919;
    --red-500: #B10909;
    --red-300: #CB2E2E;
    --red-100: #EB6D6D;
    
    --green-500: #3F841F;
    --green-300: #4DBA1A;
    --green-100: #66B142;

    --orange-500: #E38E0E;
}
 * {
     margin: 0%;
     padding: 0;
     box-sizing: 0;
     /* overflow: hidden; */
 }
 html{
     @media (max-width: 1080px) {
        font-size: 93.75%;
     }

     @media (max-width: 720px) {
         font-size: 67.5%;
     }
 }

 body {
    background: var(--black-700);
    -webkit-font-smoothing: antialiased;
 }

 body, label, input, textarea {
     font-family: 'Roboto Condensed', sans-serif;
     font-weight: 400;
 }

 label {
    color: var(--pure-white);
  }

 h1, h2 {
    font-family: 'Playball', sans-serif;
    color: var(--pure-white);
    font-weight: 600;
 }

 h3, h4 {
     font-family: 'Pacifico', sans-serif;
     color: var(--pure-white);
     font-weight: 400;
 }

 h5, h6 {
     font-family: 'Roboto Condensed', sans-serif;
     color: var(--pure-white);
     font-weight: 400;
 }
 
  p, strong, li {
     font-family: 'Pacifico', sans-serif;
     color: var(--pure-white);
     font-weight: 400;
 }

 button {
     background-color: none;
     color: var(--pure-white);
     font-family: 'Roboto Condensed', sans-serif;
     font-size: 1.6rem;
     cursor: pointer;
 }

 [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
 }

 .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
 }

 .react-modal-content {
    overflow-y: auto;
    width: 100%;
    max-width: 576px;
    background: var(--black-700);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
 }

 .react-modal-content-spinner {
    width: 100%;
    max-width: 576px;
    position: relative;
 }

 .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

     transition: filter 0.2s;
     &:hover {
         filter: brightness(0.8);
     }
 }
`;

export default GlobalStyle;

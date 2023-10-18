import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --color-primary: #61DAFB;
      --color-danger: #FF0060;
      --color-success: #1B9C85;
      --color-warning: #F7D060; 

      --background-color-black:  rgba(18, 19, 21, 1);
      --color-white:#FFFF;
      --color-off-white:#EDF2F7;
      --color-off-white2:#E2E3E2;
      --color-white:#FFFF;
      --color-black:#000;
      --color-green:#4B5330;
      --color-dark-green:#30341E;
      --color-yellow:#F29A2E;
      --color-gray:#C4C4C4;
      --font-roboto:'Roboto', sans-serif;
      --meetingType-padding:4rem;
      --footer-padding:3rem; 
    }

::-webkit-scrollbar {
  width: 0rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #363949;
}



*{
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: 0;
    border: 0;
    text-decoration:none;
    box-sizing: border-box;
  
}

#root{position:relative}

html {
  font-size:62.5%;
  scroll-behavior: smooth;

}

body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: var(--font-roboto);

}

`;

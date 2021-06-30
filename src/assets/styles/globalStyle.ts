import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@300&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
    box-sizing: inherit;
    }


    a, button, p, div, label, input, h1 {
        font-family: 'Lemonada', cursive;
    }

`;

export default GlobalStyle;

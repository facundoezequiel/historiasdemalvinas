import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`

:root{

    /* Colors */
    --black: ${Colors.black.toCSS()};
    --white: ${Colors.white.toCSS()};
    --orange: ${Colors.orange.toCSS()};
    --blue: ${Colors.blue.toCSS()};
    --gray: ${Colors.gray.toCSS()};
    --gray2: ${Colors.gray2.toCSS()};
    --greenlight: ${Colors.greenlight.toCSS()};
    --transparent: ${Colors.transparent.toCSS()};
    --inputgray: ${Colors.inputgray.toCSS()};
    --inputgrayfont: ${Colors.inputgrayfont.toCSS()};
    /* Tags colors */
    --guerra: ${Colors.guerra.toCSS()};
    --guerrafont: ${Colors.guerrafont.toCSS()};
    --actualidad: ${Colors.actualidad.toCSS()};
    --actualidadfont: ${Colors.actualidadfont.toCSS()};
    --historia: ${Colors.historia.toCSS()};
    --historiafont: ${Colors.historiafont.toCSS()};
    --homenaje: ${Colors.homenaje.toCSS()};
    --homenajefont: ${Colors.homenajefont.toCSS()};
    --argentina: ${Colors.argentina.toCSS()};
    --argentinafont: ${Colors.argentinafont.toCSS()};

    /* Fonts */
    --poppins: "poppins" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --proximasoft: "proxima-soft" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --inter: "inter" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
  padding: 0;
  margin: 0;
}

*,
    input,
    select,
    textarea,
    option,
    button {
      outline: none !important;
    }

    ::-moz-selection {
      /* Code for Firefox */
      color: var(--white);
      background: #00fbff;
    }

    ::selection {
      color: var(--black);
      background: #02e3ff;
    }
    
`;

export default GlobalStyle;

import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *, html {
        margin: 0;
        padding: 0;
    
        box-sizing: border-box;

        font-family: 'Secular One', sans-serif;
    }



    :root {
        --primary-color: #4188F2;
        --secondary-color: #FFF;
        --primary-text: #242424;
        --secondary-text: #FFF;
        --primary-hover: #1774ff;
    }
`;
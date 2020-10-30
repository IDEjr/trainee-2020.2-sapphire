import styled from 'styled-components';

import BackgroundImage from '../../assets/images/hero-section-background.jpg'
import ViaBichoLogoImage from '../../assets/images/via-bicho-logo.png'
import ArrowImage from '../../assets/images/down-arrow.png';

export const Container = styled.section`

    position: relative;

    pointer-events: none;
    user-select: none;
    
`;

export const Background = styled.div`

    width: 100vw;
    height: 100vh;
    
    background-image: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    
`;

export const ViaBichoLogo = styled.img`

    content: url(${ViaBichoLogoImage});

    height: 55%;
    
    position: absolute;
    top: 17%;
    left: 5%;

`;

export const ActionButtons = styled.section`

    pointer-events: auto;

    position: absolute;
    bottom: 18%;
    left: 8%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 40%;
    height: 7%;

    Button {
        width: 47%;
    }

    Button a {
        font-size: 1.6rem;
    }
    
`;

export const DownArrow = styled.img`

    content: url(${ArrowImage});

    width: 8%;

    position: absolute;
    bottom 0;
    left: 46.5%;
`;

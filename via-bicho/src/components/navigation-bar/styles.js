import styled from 'styled-components';

export const Container = styled.div`

    width: 47%;
    height: 4.5%;
            
    position: absolute;
    right: 2.7%;
    top: 4.5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const NavigationButton = styled.a`

    color: white;
    font-size: 3.2vh;

    pointer-events: auto;
    cursor: pointer;

    &:hover {
        color: #4188F2;
    }

`;



import styled from 'styled-components';

export const Container = styled.div`

    width: 52%;
            
    position: absolute;
    left: auto;
    right: 3%;
    top: 1.5%;

    display: flex;
    justify-content: space-between;

    a {
        color: white;
        font-size: 2vw;
        font-weight: bold;

        cursor: pointer;
        user-select: none;
    }

    a:hover {
        color: #4188F2;
    }

`;

import styled from 'styled-components';

export const Container = styled.div `
    display:block;
    width: 100%;

    h2 {
        margin:20px auto;
        font-family: 'Roboto',sans-serif;
        font-size: 40px;
        font-weight: 550;
    }
`;

export const OverlineBar = styled.div `
    background-color: #4188F2;
    width: 75%;
    height: 10px;
    border-radius : 10px;
    margin-left:-15px;
    box-shadow:2px 2px 2px rgba(0,0,0,0.2);
`;

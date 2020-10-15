import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin:0px;
    width:95%;
    justify-content:space-around;
    padding-top:25px;
    flex-wrap:wrap;

`;

export const TextColumn = styled.div`
    color:black;
    width:40%;

    @media (max-width:820px){
        width:80%;
    }

`;

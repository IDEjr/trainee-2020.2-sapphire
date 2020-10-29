import styled from 'styled-components';

export const Container = styled.div`
        width:100%;
        background-color: #4188F2;
        margin:0px;
`;

export const Logos = styled.div`
        display:flex;
        justify-content: flex-start;
        margin-left:5%;

        @media (max-width:820px){
                justify-content:center;
                margin-left:0px;
            }
`;

export const Cursor = styled.div`
        cursor:pointer;
        margin:20px;
`;
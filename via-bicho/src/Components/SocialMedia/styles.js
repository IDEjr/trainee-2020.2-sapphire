import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    h2 {
        margin:50px 0px;
        font-family: 'Roboto',sans-serif;
        font-size: 40px;
        font-weight: 550;
       
    }
`;

export const Logos = styled.div`
        display:flex;
        justify-content: space-evenly;
        margin-bottom: 40px;
`;

export const Cursor = styled.div`
        cursor:pointer;
`;

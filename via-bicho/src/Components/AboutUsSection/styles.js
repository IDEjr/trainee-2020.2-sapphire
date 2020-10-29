import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin:0px;
    width:95%;
    justify-content:space-around;
    padding:25px 0px 0px 2.5%;
    flex-wrap:wrap;
`;

export const TextColumn = styled.div`
    color:black;
    width:40%;

    @media (max-width:820px){
        width:80%;
    }

`;

export const Dog = styled.div`
    justify-self:center;
    
@media (max-width:400px){
    
    justify-self:center;
}

`;




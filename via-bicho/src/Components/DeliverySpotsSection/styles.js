import styled from 'styled-components';


export const Section = styled.div`
    width:100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 0px;
    padding:0px;

`;

export const Container = styled.div`
    margin:3% 3% 0px 3%;
`;

export const Title = styled.div`
    width:42%;
    margin-bottom:50px;
    
    @media (max-width:820px){
        width:80%;
        margin-left:10px;
    }
`;

export const BodyText = styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin: 60px 0px;
        
        flex-wrap:wrap;

        @media (min-width:820px){
            height:200px;
        }


        p{
            margin:0px;
            font-size:20px;
            font-family: 'Roboto',sans-serif;
            bold:lighter;
            color: #7a7a7a;

            @media (max-width:820px){
                margin:10px 5%;
            }
        }
`;

export const VerticalBar = styled.div`
        height:100%;
        width:5px;
        background-color: #4188F2;
        border-radius:10px;
        margin:0px 10px;

        @media (max-width:820px){
            display:none;
        }
`;

export const HorizontalBar = styled.div`
        height:5px;
        width:100%;
        background-color: #4188F2;
        border-radius:10px;
        margin:0px 10px;
        display:none;

        @media (max-width:820px){
            display:block;
        }
`;

export const PageFooter = styled.div`
       
        width:100%;
        margin-top:10px;
`;
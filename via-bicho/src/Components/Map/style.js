import styled from 'styled-components'

export const Map = styled.div`
    width: 370px;       
    height: 300px;
    overflow: hidden;
    border-radius: 0 0 40px 40px;
    margin: -5px 0 10px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));

    @media (max-width: 600px){
        margin-bottom: 50px;
    }
`
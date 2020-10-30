import styled from 'styled-components'

export const Image = styled.img`
    max-width: 390px;
    height: 300px;
    display: block;
    border-radius: 40px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));

    @media (max-width: 900px){
        margin: 0 auto;
    }
`
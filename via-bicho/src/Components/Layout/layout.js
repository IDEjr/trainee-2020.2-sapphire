import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    background-color: #4188f2;
`
export const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const TitleLocalWrapper = styled.div`
    @media (max-width: 900px){
        margin: 0 auto 50px;
    }
`

export const PhotoQuoteWrapper = styled.div`
    width: 390px;

    @media (max-width: 900px){
        margin: 0 auto;
    }
`
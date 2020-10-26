import styled from 'styled-components'

export const SpeechBubble = styled.div`
    position: relative;
    width: 250px;
    height: fit-content;
    background: white;
    border-radius: .4em;
    padding: 15px;
    left: 20%;
    top: -10%;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));


    &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 21px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    margin-left: -21px;
    margin-top: -10px;
}
`

export const SuperQuote = styled.span``
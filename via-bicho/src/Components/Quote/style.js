import styled from 'styled-components'

export const SpeechBubble = styled.div`
    position: relative;
    width: 250px;
    height: fit-content;
    background: white;
    border-radius: .4em;
    padding: 30px 15px 15px;
    left: 28%;
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
    margin-left: -20px;
    margin-top: -10px;
}
`

export const QuotationMarks = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 3em;
    line-height: 0;
`

export const Blockquote = styled.blockquote`
    max-width: 90%;
    margin-left: 15px;
    color: #666;
    font-family: Roboto, sans-serif;
    font-size: 1em;
`

export const Author = styled.p`
    margin-left: 25%;
    margin-top: 5px;
    font-size: 0.9em;
    font-family: Roboto, sans-serif;
    font-style: italic;
`
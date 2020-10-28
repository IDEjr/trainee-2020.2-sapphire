import React from 'react'
import { SpeechBubble, QuotationMarks, Blockquote, Author } from './style'

export default function Quote(){
    return(
        <SpeechBubble>
            <QuotationMarks>&ldquo;</QuotationMarks>
            <Blockquote>
            Agora eu e o Spike somos melhores amigos!
            Gosto de brincar com ele todos os dias.
            </Blockquote>
            <Author>- Marina, dona do Spike</Author>
        </SpeechBubble>
    )
}
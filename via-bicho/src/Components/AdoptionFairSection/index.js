import React from 'react'
import GlobalStyle from '../../../static/globalstyle'
import { Container, ContentWrapper, TitleLocalWrapper, PhotoQuoteWrapper } from '../Layout/layout'
import Title from '../Title/title'
import AdoptionPhoto from '../AdoptionPhoto/adoptionPhoto'
import Local from '../Map/map'
import Quote from '../Quote/quote'



export default function AdoptionFairSection(){
  return (
    <Container>
      <ContentWrapper>
        <TitleLocalWrapper>
            <Title />
            <Local />
        </TitleLocalWrapper>
        <PhotoQuoteWrapper>
          <AdoptionPhoto />
          <Quote />
        </PhotoQuoteWrapper>
        <GlobalStyle />
      </ContentWrapper>
    </Container>
  )
}

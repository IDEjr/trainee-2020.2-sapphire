import React from 'react'
import GlobalStyle from '../../../static/globalstyle'
import { Container, ContentWrapper } from '../Layout/layout'
import Title from '../Title/title'
import AdoptionPhoto from '../AdoptionPhoto/adoptionPhoto'
import Local from '../Map/map'

export default function AdoptionFairSection(){
  return (
    <Container>
      <ContentWrapper>
        <div>
            <Title />
            <Local />
        </div>
        <AdoptionPhoto />
        <GlobalStyle />
      </ContentWrapper>
    </Container>
  )
}

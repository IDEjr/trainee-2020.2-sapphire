import React from 'react'
import GlobalStyle from '../../static/globalStyle'
import { Container, ContentWrapper } from '../Components/Layout/layout'
import Title from '../Components/Title/title'
import AdoptionPhoto from '../Components/AdoptionPhoto/adoptionPhoto'
import Local from '../Components/Map/map'

export default function Home(){
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

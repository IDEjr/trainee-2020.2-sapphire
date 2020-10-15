import React from 'react'
import GlobalStyle from '../../static/globalStyle'
import { Container, ContentWrapper } from '../Components/Layout/layout'
import Title from '../Components/Title/title'
import AdoptionPhoto from '../Components/AdoptionPhoto/adoptionPhoto'

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Title />
        <AdoptionPhoto />
        <GlobalStyle />
      </ContentWrapper>
    </Container>
  )
}

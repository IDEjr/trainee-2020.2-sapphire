import React from "react"
import Help from "../components/help-section"
import GlobalStyle from "../../static/styles/globalstyle"
import AboutUsSection from "../Components/AboutUsSection"
import HeroSection from "../Components/hero-section"

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUsSection/>
    
      {/* Componentes */}
      <Help />

      {/* Estilos globais */}
      <GlobalStyle />
    </>
  )
}

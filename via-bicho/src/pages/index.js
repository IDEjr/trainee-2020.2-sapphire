import React from "react"
import Help from "../components/help-section"
import GlobalStyle from "../../static/styles/globalstyle"
import AboutUsSection from "../Components/AboutUsSection"
import AdoptionFairSection from "../Components/AdoptionFairSection"
    
export default function Home() {
  return (
    <>
      <AboutUsSection/>
    
      <AdoptionFairSection />
    
      {/* Componentes */}
      <Help />

      {/* Estilos globais */}
      <GlobalStyle />
    </>
  )
}

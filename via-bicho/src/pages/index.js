import React from "react"
import Help from "../components/help-section"
import GlobalStyle from "../../static/styles/globalstyle"
import AboutUsSection from "../Components/AboutUsSection"

export default function Home() {
  return (
    <>
      <AboutUsSection/>
    
      {/* Componentes */}
      <Help />

      {/* Estilos globais */}
      <GlobalStyle />
    </>
  )
}

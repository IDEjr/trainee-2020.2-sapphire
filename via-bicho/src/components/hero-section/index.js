import React from "react";

import NavigationBar from "../navigation-bar";

import { Container, Background, ViaBichoLogo, DownArrow } from "./styles";

function HeroSection() {
    return (
        <Container>
            <NavigationBar/>
            <ViaBichoLogo/>
            <DownArrow/>
            <Background/>
        </Container>
  )
}

export default HeroSection;

import React from "react";

import NavigationBar from "../navigation-bar";

import Button from "../Button";

import { Container, Background, ViaBichoLogo, ActionButtons, DownArrow } from "./styles";

function HeroSection() {
    return (
        <Container>
            <ActionButtons>
                <Button href="#">Quero Adotar</Button>
                <Button href="#" outlined={true}>Saber Mais</Button>
            </ActionButtons>
            <NavigationBar/>
            <ViaBichoLogo/>
            <DownArrow/>
            <Background/>
        </Container>
  )
}

export default HeroSection;

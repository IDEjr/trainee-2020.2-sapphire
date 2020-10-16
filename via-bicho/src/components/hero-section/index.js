
import React from "react";

import NavigationBar from "../navigation-bar";
import HeroBackground from "../hero-background";

import { Container } from "./styles";

import ViaBichoLogo from '../../assets/images/via-bicho-logo.png'

function HeroSection() {
    return (
        <Container>
            <NavigationBar />
            <img id='via-bicho-logo' src={ViaBichoLogo}></img>
            <HeroBackground />
        </Container>
  )
}

export default HeroSection;

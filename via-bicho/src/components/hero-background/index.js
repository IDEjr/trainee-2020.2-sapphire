import React, { Component } from 'react';

import { Container } from "./styles";

import BackgroundImage from '../../assets/images/hero-section-background.jpg';

function HeroBackground() {
    return (
        <Container>
            <img src={BackgroundImage}/>
        </Container>
    )
}

export default HeroBackground;
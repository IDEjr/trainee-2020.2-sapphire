import React from 'react';

import { Container, NavigationButton } from "./styles";

function NavigationBar() {
    return (
        <Container>
            <NavigationButton>Quem Somos</NavigationButton>
            <NavigationButton>Como Adotar</NavigationButton>
            <NavigationButton>Como Ajudar</NavigationButton>
            <NavigationButton>Contato</NavigationButton>
        </Container>
    )
}

export default NavigationBar;
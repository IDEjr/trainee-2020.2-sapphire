import React from "react";

import Button from '../Button';
import { MainContent, Container, Icon } from "./styles";

function Card({ children, title, content, buttonText }) {
  return (
    <Container>
      
        <Icon>
          {children}
        </Icon>

      <MainContent>
        <h3>{title}</h3>
        <p>{content}</p>

        <Button href="#">
          {buttonText}
        </Button>

      </MainContent>
    </Container>
  )
}

export default Card;

import React from "react";
import Card from "../Card";

import { Container, CardWrapper } from "./styles";

import HeartIcon from '../../assets/svg/heart.svg';
import MoneyIcon from '../../assets/svg/money.svg';
import VolunteerIcon from '../../assets/svg/volunteer.svg';

function Help() {

  return (
    <Container>
      <h2>Como ajudar?</h2>

      <CardWrapper>
        <Card
          title="Contribuição Financeira"
          content="Valores financeiros a partir de R$5,00 mensais. Envie um e-mail ou recado pelo Facebook."
          buttonText="Contato"
        >
          <MoneyIcon />
        </Card>
        <Card
          title="Doação"
          content="Rações, jornais, panos, medicamentos e utensilios para cães e gatos. Doando roupas, calçados, objetos para nossos brechós."
          buttonText="Pontos de Entrega"
        >
         <HeartIcon />
        </Card>
        <Card
          title="Voluntariado"
          content="Anunciando sua empresa neste site. Dando hospedagem. Transporte. Participando dos eventos. Toda ajuda é bem vinda!!"
          buttonText="Cadastro"
        >
          <VolunteerIcon />
        </Card>
      </CardWrapper>

    </Container>
  )
  
}

export default Help;

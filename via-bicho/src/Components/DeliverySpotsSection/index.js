import React from "react";
import OverlineTitle from "../OverlineTitle";
import SocialMediaStripe from "../SocialMediaStripe";
import { Container, Section, BodyText, VerticalBar, HorizontalBar, Title, PageFooter } from "./styles"

function DeliverySpotsSection() {
    return (
        <Section>
            <Container>
                <Title>
                    <OverlineTitle title="Pontos de entrega" />
                </Title>

                <BodyText>
                    <p>Centro<br />Armazém Natural<br />Av. João Correia, 853<br /><br />
                Pecuária Pinto<br />Rua Aldo Soares 243</p>

                    <VerticalBar />
                    <HorizontalBar />

                    <p>Centenário<br />AquaShop Aquarismo <br />Rua Santa Helena, nº15<br />
                Sala 2 (Esquina com Av.Mauá)<br /><br />Pecuária Vitória<br />Av. 25 de Julho, 723</p>

                    <VerticalBar />
                    <HorizontalBar />
                    <p>São Luís<br />Sorveteria Italiana <br /> Av. Presidente <br /> Kennedy, 1276</p>
                </BodyText>
            </Container>
            <PageFooter>
                <SocialMediaStripe />
            </PageFooter>
        </Section>
    )
}
export default DeliverySpotsSection;
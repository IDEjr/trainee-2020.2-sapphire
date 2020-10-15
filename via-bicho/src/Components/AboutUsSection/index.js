import React from "react";
import AboutUsText from "../AboutUsText"
import SocialMedia from "../SocialMedia";
import DogImageAboutUs from "../DogImageAboutUs"
import { Container, TextColumn } from "./styles"

function AboutUsSection() {
    return (
        <Container>
            <TextColumn>
                <AboutUsText />
                <SocialMedia />
            </TextColumn>
            <DogImageAboutUs />
        </Container>
    )
}
export default AboutUsSection;
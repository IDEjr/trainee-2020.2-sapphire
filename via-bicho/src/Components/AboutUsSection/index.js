import React from "react";
import AboutUsText from "../AboutUsText"
import SocialMedia from "../SocialMedia";
import DogImageAboutUs from "../DogImageAboutUs"
import { Container, TextColumn, Dog } from "./styles"

function AboutUsSection() {
    return (
        <Container>
            <TextColumn>
                <AboutUsText />
                <SocialMedia />
            </TextColumn>
            <Dog>
                <DogImageAboutUs/>
            </Dog>
        </Container>
    )
}
export default AboutUsSection;
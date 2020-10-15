import React from "react";
import FacebookIcon from "../../Icons/Facebook.js";
import InstagramIcon from "../../Icons/Instagram.js";
import { Container, Logos } from "./styles";

function SocialMedia() {
    return (
        <Container>
            <h2>{"Redes sociais"}</h2>
            <Logos>
                <FacebookIcon width="100px" heigth="100px" />
                <InstagramIcon width="100px" heigth="100px" />
            </Logos>
        </Container>
    )
}
export default SocialMedia;
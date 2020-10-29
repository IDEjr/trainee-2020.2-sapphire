import React from "react";
import FacebookIconFooter from "../../assets/icons/FacebookFooter.js";
import InstagramIcon from "../../assets/icons/Instagram.js";
import { Container, Cursor, Logos } from "./style";

function SocialMediaStripe() {
    return (
        <Container>
            <Logos>
                <Cursor><FacebookIconFooter /></Cursor>
                <Cursor><InstagramIcon width="80px" heigth="80px" /></Cursor>
            </Logos>
        </Container>
    )
}
export default SocialMediaStripe;
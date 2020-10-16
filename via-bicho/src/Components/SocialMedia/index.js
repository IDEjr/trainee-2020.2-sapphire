import React from "react";
import FacebookIcon from "../../assets/icons/Facebook.js";
import InstagramIcon from "../../assets/icons/Instagram.js";
import { Container, Logos, Cursor} from "./styles";

function SocialMedia() {
    return (
        <Container>
            <h2>{"Redes sociais"}</h2>
            <Logos> 
                <Cursor><FacebookIcon/></Cursor>
                <Cursor><InstagramIcon width="100px" heigth="100px" /></Cursor>
            </Logos>
        </Container>
    )
}
export default SocialMedia;

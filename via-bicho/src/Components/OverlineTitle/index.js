import React from "react";
import { Container ,OverlineBar } from "./styles"

function OverlineTitle({ title }) {
    return (
        <Container>
            <OverlineBar/>
            <h2>{title}</h2>
        </Container>
    )
}
export default OverlineTitle;

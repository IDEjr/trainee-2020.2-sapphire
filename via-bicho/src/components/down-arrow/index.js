import React from 'react'

import { Container } from "./styles";

import ArrowImage from '../../assets/images/down-arrow.png';

function DownArrow() {
    return (
        <Container>
            <img src={ArrowImage}/>
        </Container>
    )
}

export default DownArrow;
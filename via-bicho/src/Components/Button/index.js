import React from 'react';

import { Container } from './styles';

function Button( {children, href, outlined} ) {
  return (
    <Container outline={outlined}>
        <a href={href}>
            {children}
        </a>
    </Container>
    );
}

export default Button;
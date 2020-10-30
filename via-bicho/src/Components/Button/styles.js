import styled from "styled-components"

export const Container = styled.button`

  cursor: pointer;
  padding: 10px 0;
  border: ${ props => props.outline ? '1px solid var(--secondary-text)' : 'none' };
  border-radius: 10px;
  background: ${ props => props.outline ? 'none' : 'var(--primary-color)' };

    transition: all 100ms ease-in-out;

  &:hover {
    background: var(--primary-hover);

    border: ${ props => props.outline ? '1px solid var(--primary-color)' : 'none' };;
    & > a {
        color: var(--secondary-text);
    }
  }
  
  &:focus {
      outline: none;
  }

  a {
    color: var(--secondary-text);
    font-size: 1.05rem;
    text-decoration: none;
  }

`

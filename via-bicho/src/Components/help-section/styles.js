import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    padding: 30px 0;

    display: flex;
    flex-direction: column;

    text-align: center;

    background-color: var(--primary-color);

    & > h2 {
        flex-basis: 50px;
        font-size: 2rem;

        color: var(--secondary-text);
    }
`;

export const CardWrapper = styled.div`
    margin: 0 auto;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


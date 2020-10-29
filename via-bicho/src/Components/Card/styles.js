import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    margin: 70px 30px 0px 30px;

    min-width: 200px;
    max-width: 250px;

    color: var(--primary-text);
    background-color: var(--secondary-color);

    border-radius: 10px;
`;

export const MainContent = styled.div`
    margin: 50px auto 10px auto;
    padding: 10px 20px;

    min-height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h3 {
        font-size: 1.3rem;
    }

    & > p {
        font-size: 1.05rem;
    }

`;

export const Icon = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--secondary-color);

    & > svg {
        width: 60px;
        height: 60px;
    }

    top: -50px;
    left: calc( 50% - 50px );
`;
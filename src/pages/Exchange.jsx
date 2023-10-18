import React from 'react';
import ExchangeMain from '../components/ExchangeMain';
import styled from 'styled-components';
import ExchangeBanner from '../components/ExchangeBanner';

const ExchangeSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/img/Exchange2.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function Exchange() {
    return (
        <>
            <ExchangeSection>
                <ExchangeBanner />
                <ExchangeMain />
            </ExchangeSection>
        </>
    );
}

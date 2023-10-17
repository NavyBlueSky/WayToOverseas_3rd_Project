import React from 'react';
import ExchangeMain from '../components/ExchangeMain';
import styled from 'styled-components';
import ExchangeBanner from '../components/ExchangeBanner';

const ExchangeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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

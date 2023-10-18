import React, { useState } from 'react';
import AirlineSelect from '../components/AirlineSelect';
import styled from 'styled-components';
import AirlineBanner from '../components/AirlineBanner';

const AirlineMainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: url(/img/Airline.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function AirlineSearch() {
    return (
        <AirlineMainSection>
            <AirlineBanner />
            <AirlineSelect />
        </AirlineMainSection>
    );
}

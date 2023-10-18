import React, { useState } from 'react';
import AirlineSelect from '../components/AirlineSelect';
import styled from 'styled-components';
import AirlineBanner from '../components/AirlineBanner';

const AirlineMainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
`;

export default function AirlineSearch() {
    return (
        <section>
            <AirlineBanner />
            <AirlineSelect />
        </section>
    );
}

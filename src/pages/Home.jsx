import React from 'react';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';

const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/img/INC3.png);
    background-repeat: no-repeat;
    background-size: cover;
`;

export default function Home() {
    return (
        <>
            <HomeSection>
                <MainBanner />
                <Banner1 />
            </HomeSection>
        </>
    );
}

import React from 'react';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';

const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home() {
    return (
        <>
            <HomeSection>
                홈 섹션 배경 이미지 넣기
                <MainBanner />
                <Banner1 />
                <Banner2 />
            </HomeSection>
        </>
    );
}

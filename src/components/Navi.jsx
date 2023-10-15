import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navi() {
    return (
        <>
            <header>
                <a href="/">메인 로고</a>
                <nav>
                    <a href="/airline">항공편 검색</a>
                    <a href="/exchange">환율 계산기</a>
                    {/*
                    <Link to="/airline">항공편 검색</Link>
                    <Link to="/exchange">환율 계산기</Link>
                     */}
                </nav>
            </header>
        </>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: aliceblue;
    height: 130px;
`;

const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    background-image: url(/img/MainLogo.png);
    width: 270px;
    height: 120px;
    /* background-image: url(/img/HeaderLogo.png); */
    /* width: 140px;
    height: 110px; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    margin: 0 0 0 100px;
    @media screen and (min-width: 1300px) {
        margin: 0 0 0 300px;
    }
`;

const NavUl = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 100px 0 0;
    padding: 0;
    @media screen and (min-width: 1300px) {
        margin: 0 300px 0 0;
    }
`;

const NavLi = styled.li`
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #000000;
    padding: 10px;
    font-size: 20px;

    &:hover {
        border-bottom: solid 2px #3954a3;
    }
`;

export default function Header() {
    return (
        <Navbar>
            <Link to={'/'}>
                {' '}
                <Logo />
            </Link>

            <NavUl>
                <NavLi>
                    <NavLink href="/airline">항공권 검색</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink href="/exchange">환율 계산기</NavLink>
                </NavLi>
            </NavUl>
        </Navbar>
    );
}

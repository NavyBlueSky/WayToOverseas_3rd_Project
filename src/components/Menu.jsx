import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 60px;
    width: 100%;
    text-align: center;
    display: inline-block;
    background-color: lightsteelblue;
`;

const GnbLists = styled.ul`
    list-style: none;
    height: 60px;
    margin: auto;
    padding: 0;
`;

const GnbItem = styled.li`
    display: inline-block;
    height: 60px;
    a {
        font-family: 'Noto Sans KR', sans-serif;
        display: block;
        position: relative;
        height: 60px;
        line-height: 65px;
        font-size: 1rem;
        font-weight: 500;
        padding: 0 0px;
        margin: 0 16px;
        text-decoration: none;
        color: #666;
    }
    .active {
        border-bottom: solid 3px #d85a4d;
    }
`;

const MainLogo = styled.div`
    a {
    }
`;

export default function Menu() {
    return (
        <Nav>
            <GnbLists>
                <GnbItem>
                    <Link exact to="/airline" activeClassName="active">
                        Home
                    </Link>
                </GnbItem>
                <MainLogo>logo</MainLogo>
                <GnbItem>
                    <Link exact to="/exchange" activeClassName="active">
                        About
                    </Link>
                </GnbItem>
            </GnbLists>
        </Nav>
    );
}

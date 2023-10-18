import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: lightsteelblue;
    width: 100%;
    height: 110px;
    /* padding: 10px 12px 8px 12px; */
    display: flex;
    align-items: center;
    justify-content: center;
    .nav_logo {
        width: 100px;
        height: 100px;
        background-image: url(/img/HeaderLogo.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 0 12px;
        .nav-logo-link {
            text-decoration: none;
            font-size: 24px;
            color: black;
            font-weight: bold;
        }
    }
`;
const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    padding: 5px 15px;

    li {
        border-top: solid 1px transparent;
        &:hover {
            cursor: pointer;
            /* background: #44a8f4; */
            /* border-radius: 4px; */
            /* border-top: solid 1px black; */
            border-bottom: solid 1px #d85a4d;
        }
    }
    .nav-menu-list1 {
        text-decoration: none;
        color: white;
        display: block;
        padding: 10px 15px;
    }
    .nav-menu-list2 {
        text-decoration: none;
        color: white;
        display: block;
        padding: 10px 15px;
    }
`;

const MainLogo = styled.div`
    margin: 2px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
`;

export default function Header3() {
    return (
        <>
            <StyledHeader>
                <NavMenu>
                    <li className="">
                        <Link to={'/airline'} className="nav-menu-list1">
                            항공편 검색
                        </Link>
                    </li>
                    <Link to={'/'} className="nav-logo-link">
                        <MainLogo className="nav_logo" />
                    </Link>

                    <li>
                        <Link to={'/exchange'} className="nav-menu-list2">
                            환율 계산기
                        </Link>
                    </li>
                </NavMenu>
            </StyledHeader>
        </>
    );
}

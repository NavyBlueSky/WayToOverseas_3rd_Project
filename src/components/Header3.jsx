import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: lightsteelblue;
    width: 100%;
    height: 110px;
    padding: 10px 12px 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav_logo {
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
        &:hover {
            cursor: pointer;
            /* background: #44a8f4; */
            /* border-radius: 4px; */
            border-bottom: solid 1px #d85a4d;
        }
    }
    .nav-menu-list {
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
                    <li>
                        <Link to={'/airline'} className="nav-menu-list">
                            항공편 검색
                        </Link>
                    </li>
                    <MainLogo className="nav_logo">
                        <Link to={'/'} className="nav-logo-link">
                            로고자리
                        </Link>
                    </MainLogo>
                    <li>
                        <Link to={'/exchange'} className="nav-menu-list">
                            환율 계산기
                        </Link>
                    </li>
                </NavMenu>
            </StyledHeader>
        </>
    );
}

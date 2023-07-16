import React from 'react';
import {NavLink}  from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to= "/">
                <img src = "./images/logo1.png" alt = "my logo img" />
            </NavLink>
            <Nav />
             
        </MainHeader>
    )
}
const MainHeader = styled.section`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify_conntent: space-between;
align-items: center;
position: relative;

.logo {
    height : 5rem;
}

// @media (max-width: ${({ theme }) => theme.media.mobile}){

// }

`;


export default Header;
import React from 'react';
import styled from 'styled-components';

const TitleBar = styled.h1`
background-color: #173647;
text-align: center;
color: #fff;
font-size: 18px;
height: 36px;
line-height: 36px;
width: 100%;
position: fixed;
left: 0;
top: 0;
`;

const Header = () => {
    return <TitleBar>Mask Map</TitleBar>
};

export default Header;
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Burger = styled.div`
    width: ${ ({ customWidth }) => customWidth };
    height: ${ ({ customHeight }) => customHeight };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    padding: 0;
`

const MenuIcon = ({ mainPage=true, darkMode, toggle, customWidth, customHeight, color=false }) => {

    return (
        <Burger customWidth={ customWidth } customHeight={ customHeight } onClick={ toggle }>
            <svg viewBox="0 0 100 80" width={ customWidth } 
                fill={ mainPage ? "#000000" : darkMode ? "#0000000" : "#ffffff" } 
                height={ customHeight }
            >
                <rect width="100" height="8"></rect>
                <rect y="30" width="100" height="8"></rect>
                <rect y="60" width="50" height="8"></rect>
            </svg>
        </Burger>
    )
}

export default MenuIcon
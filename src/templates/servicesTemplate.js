import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Desktop from "../components/navigation/desktop"
import Mobile from "../components/navigation/mobile"
import CaseStudy from "../components/landingPage/caseStudy"
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from "../components/seo"
import { colors } from '../styles/colors'
import { graphql, useStaticQuery } from 'gatsby'

const Landing = styled.section`
    width: 100%;
    min-height: 50.5vh;
    max-height: 84.5vh;
    padding: 20% 0;
    background: ${ colors.neutral00 };
    padding-left: 17%;
    display: flex;
    align-items: center;
    font-size: 16px;
    display: flex;
    position: relative;
    @media (max-height: 1720px) {
            font-size: 13px;
        }
    @media (max-width: 1520px) {
            font-size: 12px;
        }
    @media (max-width: 1350px) {
            font-size: 11px;
        }
    @media (max-width: 1120px) {
            font-size: 10px;
        }
    @media (max-width: 950px){
        max-height: 100vh;
    }
    @media (max-width: 950px) and (orientation: portrait){
        font-size: 12px;
        padding-left: 0;
        padding: 45% 15%;
        min-height: 50vh;
    }
    @media (max-width: 650px) and (orientation: landscape){
        font-size: 12px;
        padding-left: 0;
        padding: 60% 15%;
        min-height: 50vh;
    }
    @media (max-width: 650px) and (orientation: portrait){
        font-size: 8px;
        padding: 40% 8%;
    }
    .text {
        max-width: 50%;
        font-family: 'Poppins';
        font-style: normal;
        color: ${ colors.neutral100 };
        margin-bottom: 10%;
        @media (max-width: 950px) {
        max-width: 100%;
        margin-bottom: 0;
        }
        h1 {
            font-weight: 600;
            font-size: 5.125em;
            line-height: 119.5%;
            margin-bottom: 4%;
            @media (max-width: 450px) {
                font-size: 4.125em;
            }
        }
        p {
            max-width: 55%;
            font-weight: 300;
            font-size: 1.375em;
            line-height: 163.63%;
            @media (max-width: 950px) {
                max-width: 100%;
            }
        }
    }
`
const Logo = styled.div`
    width: 201px;
    height: 191px;
    margin-left: 20%;
    margin-bottom: 16%;
    @media (max-width: 950px) {
        position: absolute;
        left: 5%;
        top: 5%;
        margin: 0;
        width: 161px;
        height: 150px;
    }
    @media (max-width: 950px) and (orientation: landscape){
        width: 88px;
        height: 92px;
    }
    @media (max-width: 450px) and (orientation: portrait){
        width: 88px;
        height: 92px;
    }
`

const ServicesSection = styled.section`
    background: ${ colors.neutral90 };
    padding: 15%;
    display: flex;
    justify-content: space-between;
    color: ${ colors.neutral00 };
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    position: relative;
    @media (max-width: 1500px) {
        font-size: 14px;
    }
    @media (max-width: 1250px) {
        font-size: 12px;
    }
    @media (max-width: 1100px) {
        font-size: 10px;
    }
    @media (max-width: 950px) {
        font-size: 14px;
        flex-direction: column;
    }
    @media (max-width: 650px) {
        font-size: 12px;
    }
    @media (max-width: 450px) {
        font-size: 10px;
        padding: 15% 5%;
    }
    .left {
        width: 40%;
        @media (max-width: 950px) {
            width: 100%;
        }
        h2 {
            font-weight: 600;
            font-size: 3.4375em;
            line-height: 138.18%;
            margin-bottom: 7%;
        }
        p {
            font-weight: 300;
            font-size: 1.1875em;
            line-height: 168.42%;
            color: ${ colors.neutral30 };
        }
    }
    ul {
        width: 40%;
        list-style: none;
        @media (max-width: 950px) {
            width: 100%;
            margin-top: 20%;
        }
        li {
            font-weight: 600;
            font-size: 1.6875em;
            line-height: 351.85%;
            border-bottom: 1px solid ${ colors.neutral60 };
            span {
                margin-right: 5%;
                font-size: 74%;
                color: ${ colors.neutral30 };
            }
        }
    }
    .triangle {
        width: 159px;
        height: 205px;
        position: absolute;
        left: 3%;
        bottom: -11%;
        z-index: 5;
        @media (max-width: 1450px) {
            bottom: -13%;
        }
        @media (max-width: 1250px) {
            bottom: -16%;
        }
        @media (max-width: 950px) {
            bottom: -11%;
        }
        @media (max-width: 700px) {
            bottom: -15%;
            width: 119px;
            height: 165px;
        }
        @media (max-width: 450px) {
            bottom: -15%;
            width: 89px;
            height: 135px;
        }
    }
`

const QuoteSection = styled.div`
    padding: 15% 22%;
    color: ${ colors.neutral80 };
    position: relative;
    background: ${ colors.neutral10 };
    @media (max-width: 1600px) {
        font-size: 14px;
    }
    @media (max-width: 1180px) {
        font-size: 12px;
    }
    @media (max-width: 850px) {
        font-size: 10px;
    }
    @media (max-width: 650px) {
        font-size: 8px;
        padding: 15%;
    }
    @media (max-width: 450px) {
        font-size: 6px;
        padding: 15% 10%;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 3.4375em;
        line-height: 138.18%;
    }
    .quote {
        width: 3.875em;
        height: 3.875em;
        position: relative;
        right: 5%;
    }
    .square {
        width: 14.6875em;
        height: 14.5625em;
        position: absolute;
        top: 20%;
        right: 23%;
    }
    .half-circle {
        width: 11.25em;
        height: 10.5625em;
        position: absolute;
        bottom: -6%;
        right: 15%;
    }
`
const ServiceTemplate = ({ pageContext }) => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 950px)'
    })
    const data = useStaticQuery(graphql`
    {
    allFile(filter: {relativeDirectory: {eq: "servicesPage"}}) {
        nodes {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
        }
    }
    }
`)
    
    return(
        <Layout>
             <SEO title="Home" />
            { isMobile ? <Mobile /> : <Desktop /> }
            <Landing>
                <div className="text">
                    <h1>{ pageContext.first.Title }</h1>
                    <p>{ pageContext.first.Desc }</p>
                </div>
                <Logo>
                    <Img fluid={ pageContext.logo } alt="subpage logo" />
                </Logo>
            </Landing>
            <ServicesSection>
                <div className="left">
                    <h2>{ pageContext.second.Title }</h2>
                    <p>{ pageContext.second.Desc }</p>
                </div>
                <ul className="right">
                    { pageContext.second.List.map((item, index) => (
                        <li key={ index }><span>0{ index + 1 }.</span>{ item }</li>
                    )) }
                </ul>
                <div className="triangle">
                    <Img fluid={ data.allFile.nodes[1].childImageSharp.fluid } alt="triangle" />
                </div>
            </ServicesSection>
            <QuoteSection>
                <div className="quote">
                    <Img fluid={ data.allFile.nodes[2].childImageSharp.fluid } alt="quotemark" />
                </div>
                <p>
                    { pageContext.third.Quote }
                </p>
                <div className="square">
                    <Img fluid={ data.allFile.nodes[3].childImageSharp.fluid } alt="square" />
                </div>
                <div className="half-circle">
                        <Img fluid={ data.allFile.nodes[0].childImageSharp.fluid } alt="half-circle" />
                    </div>
            </QuoteSection>
            <CaseStudy triangle={ false } />
            <Footer />
        </Layout>
    )
}

export default ServiceTemplate
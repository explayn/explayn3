import React from 'react'
import BG from '../../images/branding_ikonki/duza kredka.svg'
import styled from 'styled-components'
const Style = styled.div`
    background-image: url(${BG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 120vh;
    display: flex;
    flex-direction: column;
    padding: 10% 0;
    align-items: center;
    font-family: "Poppins";
    .header {
        max-width: 1222px;
        display: flex;
        align-items: flex-start;
        color: #000;
        margin-bottom: 160px;
        @media (max-width: 1500px) {
            max-width: 900px;
        }
        @media (max-width: 1050px) {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 10%;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 3.4375rem;
            line-height: 138.18%;
            margin-right: 10px;
            font-weight: 600;
            @media (max-width: 1500px) {
               width: 55%;
            }
            @media (max-width: 1050px) {
                margin-right: 0;
                width: 100%;
                margin-bottom: 40px;
            }
        }
        p {
            width: 50%;
            font-size: 1.375rem;
            line-height: 136.36%;
            font-weight: 300;
            @media (max-width: 1050px) {
                width: 100%;
            }
        }
    }
    .icons {
            max-width: 1400px;
            .cnt {
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: 1150px) {
                    padding: 0 5vw;
                }
                @media (max-width: 1200px) {
                    flex-direction: column;
                    height: 100%;
                    padding-bottom: 5vh;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            .line {
                width: 100px;
                height: 5px;
                border-bottom: 5px dotted grey;
                margin: 0 20px ;
                @media (max-width: 1200px) {
                    height: 50px;
                    width: 5px;
                    border-bottom: none;
                    border-left: 5px dotted grey;
                    margin: 50px 0 20px;
                }
            }
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 70px;
                max-height: 70px;
                position: relative;
                cursor: pointer;
                h5 {
                    font-size: 1.6875rem;
                    font-weight: 600;
                    margin-top: 50px;
                    @media (max-width: 1200px) {
                        margin-top: 10px;
                    }  
                }
                @media (min-width: 1200px) and (hover: hover) {
                    &:hover img{
                        transition: 0.2s ease-in;
                        transform: scale(1.1);
                    }
                    &:hover:nth-of-type(1)::after, &:hover:nth-of-type(3)::after, &:hover:nth-of-type(5)::after, &:hover:nth-of-type(7)::after, &:hover:nth-of-type(9)::after {
                        display: block;
                    }
                    &:hover:nth-of-type(1)::before, &:hover:nth-of-type(3)::before, &:hover:nth-of-type(5)::before, &:hover:nth-of-type(7)::before, &:hover:nth-of-type(9)::before {
                        display: block;
                    }
                    &:nth-of-type(1)::after {
                        content: "Our process begins with getting to know your business. We start by identifying your long-term goals and related challenges to thoroughly understand your industry and competitors. In-depth analysis allows us to create the best possible picture of your brand.";
                        display: none;
                        position: absolute;
                        top: 12vw;
                        left: 1vw;
                        width: 40vw;
                        max-height: 200px;
                        background-color: #F5F6FA;
                        padding: 30px;
                        font-family: "Poppins";
                        font-size: 0.9rem;
                        line-height: 136%;
                    }
                    &:nth-child(1)::before {
                        content: "";
                        display: none;
                        position: absolute;
                        top: 11.5vw;
                        left: 30px;
                        width: 30px;
                        height: 30px;
                        background-color: #F5F6FA;
                        transform: rotate(-120deg) skew(25deg);
                        z-index: 565;
                    }
                    &:nth-of-type(3)::after {
                        content: "We develop a detailed plan of action upon which we will base an effective brand strategy. With an in-depthmarket analysis and audience definition, our team maps out the key points that will help create a cohesive presence for your brand.";
                        display: none;
                        position: absolute;
                        top: 12vw;
                        left: 1vw;
                        width: 40vw;
                        max-height: 200px;
                        background-color: #F5F6FA;
                        padding: 30px;
                        font-family: "Poppins";
                        font-size: 0.9rem;
                        line-height: 136%;
                    }
                    &:nth-child(3)::before {
                        content: "";
                        display: none;
                        position: absolute;
                        top: 11.5vw;
                        left: 30px;
                        width: 30px;
                        height: 30px;
                        background-color: #F5F6FA;
                        transform: rotate(-120deg) skew(25deg);
                        z-index: 565;
                    }
                    &:nth-child(5)::after {
                        content: "This is our favorite part of the process. It's where we use our knowledge, imagination, and creativity to develop the strategy into a visual image of the brand. When designing a brand identity, we look at touchpoints and see if they accurately represent the values and personality identified in the strategy.";
                        display: none;
                        position: absolute;
                        top: 12vw;
                        width: 40vw;
                        max-height: 200px;
                        background-color: #F5F6FA;
                        padding: 30px;
                        font-family: "Poppins";
                        font-size: 0.9rem;
                        line-height: 136%;
                    }
                    &:nth-of-type(5)::before {
                        content: "";
                        display: none;
                        position: absolute;
                        top: 11.5vw;
                        left: 15px;
                        width: 30px;
                        height: 30px;
                        background-color: #F5F6FA;
                        transform: rotate(-120deg) skew(25deg);
                        z-index: 565;
                    }
                    &:nth-of-type(7)::after {
                        content: "The brand is now ready for prime time! We gather all the information and identify the assets needed to implement the brand - from business cards to packaging to advertising. Our efforts are designed to get your brand seen by as many eyes as possible.";
                        display: none;
                        position: absolute;
                        top: 12vw;
                        right: 1vw;
                        width: 40vw;
                        max-height: 200px;
                        background-color: #F5F6FA;
                        padding: 30px;
                        font-family: "Poppins";
                        font-size: 0.9rem;
                        line-height: 136%;
                    }
                    &:nth-child(7)::before {
                        content: "";
                        display: none;
                        position: absolute;
                        top: 11.5vw;
                        left: 10px;
                        width: 30px;
                        height: 30px;
                        background-color: #F5F6FA;
                        transform: rotate(-120deg) skew(25deg);
                        z-index: 565;
                    }
                    &:nth-child(9)::after {
                        content: "This is the final step in which we monitor the feedback received from the market. What are consumers saying about our brand? Have we increased awareness and interest? We test all assumptions and review the project for optimization.";
                        display: none;
                        position: absolute;
                        top: 12vw;
                        right: 1vw;
                        width: 40vw;
                        max-height: 200px;
                        background-color: #F5F6FA;
                        padding: 10px;
                        font-family: "Poppins";
                        font-size: 0.9rem;
                        line-height: 136%;
                    }
                    &:nth-of-type(9)::before {
                        content: "";
                        display: none;
                        position: absolute;
                        top: 11.5vw;
                        left: 15px;
                        width: 30px;
                        height: 30px;
                        background-color: #F5F6FA;
                        transform: rotate(-120deg) skew(25deg);
                        z-index: 565;
                    }
                }
                @media (max-width: 1300px) {
                    width: 80%;
                    height: 80%;
                }
                @media (max-width: 1150px) {
                    width: 50%;
                    height: 50%;
                }
                @media (max-width: 1200px) {
                    max-width: 100px;
                    max-height: 100px;
                    width: 100px;
                    height: 100px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .dymek{
            display: none;
            position: relative;
            background: grey;
            width: 100px;
            height: 100px;
            z-index: 99999;
            font-size: 22px;
        }
`
const Icon = ({img, text}) => {
    return (
        <>
         <div className="icon">
            <img src={ img } alt="icon" />      
            <h5>{text}</h5>       
         </div>

        </>
    )
}

const BrandingSteps = ({ arr }) => {
    return (
        <Style>
            <div className="header">
                <h2>
                    Simple and effective process
                </h2>
                <p>
                A website is often the first and most important touchpoint between a customer and a brand. It is not just a URL, it is a key aspect of your business and marketing strategy.
                </p>
            </div>
            <div className="icons">
                <div className="cnt">
                { arr.map((s, index) => {
                    return (  
                        <>               
                            <Icon key={ index } img={s.img} text={s.text}/>   
                              { index !== arr.length -1 && (
                        <div key={ index } className="line"></div>
                ) }
                        </>
                    )
                }) }
                </div>
            </div>
        </Style>
    )
}

export default BrandingSteps


import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { appContext } from './context'
import ContactFormImage from '../images/contactFormImage.svg'
import emailjs from 'emailjs-com';

const Style = styled(motion.div)`
    min-height: 100%;
    padding: 5% 16%;
    z-index: 999;
    font-size: 15px;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    position: relative;
    @media (max-width: 500px) {
        font-size: 12px;
    }
    h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 5.25em;
        letter-spacing: -1.34px;
        color: #000000;
        line-height: 148%;
        margin-bottom: 2.38vh;
        @media (max-width: 500px) {
            font-size: 4em;
        }
    }
    p, h4 {
        font-size: 1.5em;
        letter-spacing: -1.08px;
        color: #000000;
        line-height: 145%;
    }
    p {
        margin-bottom: 3vh;
        width: 50%;
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    h4 {
        margin-bottom: 15px;
    }
    .boxes-cnt {
        display: flex;
        flex-wrap: wrap;
        width: 55%;
        margin-bottom: 0.99vh;
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    .error-msg {
        color: red;
        display: block;
        &.cat {
            margin-bottom: 3vh;
        }
    }
    .box {
        margin-right: 5px;
        margin-bottom: 10px;
        font-weight: 300;
        padding: 3px;
        color: #1a1a1a;
        background-color: #fff;
        border: 1px solid #333;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-in;
        font-size: 20px;
        position: relative;
        user-select: none;
        input {
            position: absolute;
            top:0;
            left: 0;
            height: 0;
            width: 0;
            cursor: pointer;
            opacity: 0;
        }
        span {
            font-weight: 700;
        }
        &.active {
            border-color: #5163F6;
            background: #5163F6;
            color: #fff;
        }
        @media(hover: hover) {
            &:hover {
            border-color: #5163F6;
            background: #5163F6;
            color: #fff;
        }
        }
    }
    form {
        width: 50%;
        @media (max-width: 1600px) {
            width: 65%;
        }
        @media (max-width: 1024px) {
            width: 100%;
        }
    }
    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 3vh;
        &:last-of-type {
            margin-bottom: 0;
        }
        label {
            font-size: 1.5em;
            line-height: 148%;
        }
        input {
            border: none;
            border-bottom: 1px solid #D3D3D3;
            outline: none;
            font-size: 1.2em;
        }
        textarea {
            resize: none;
            outline: none;
            height: 11.7vh;
            border: none;
            border-bottom: 1px solid #D3D3D3;
        }
    }
    .btn-cnt {
        @media (max-width: 1024px) {
                display: flex;
                justify-content: center;
                margin:  2vh 0 0 0;
            }
    }
    .form-submit {
        padding: 13px 70px;
        font-family: "Poppins";
        font-weight: 600;
        border: none;
        background-image: linear-gradient(#4c65ff 0%, #263380 180%);
        color: #ffffff !important;
        font-size: 20px;
        text-transform: uppercase;
        border-radius: 32px;
        display: inline-block;
        transition: all 0.3s ease 0s;
        letter-spacing: 0.65px;
        cursor: pointer;
           @media (hover: hover) {
            &:hover {
                color: #404040 !important;
                font-weight: 600 !important;
                letter-spacing: 3px;
                background: none;
                -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                transition: all 0.3s ease 0s;
            }
           }
        }
        .exit-btn {
            position: absolute;
            top: 5%;
            right: 5%;
            border: none;
            width: 38px;
            height: 38px;
            background: transparent;
            outline: none;
            cursor: pointer;
            transition: all 0.3s ease-in;
            @media (max-width: 500px) {
                top: 3%;
            }
            &:hover {
                transform: rotate(-90deg)
            }
            .bar {
                width: 100%;
                height: 2px;
                background: #000;
                &:first-of-type {
                    transform: translateY(0.8px) rotate(135deg);
                }
                &:last-of-type {
                    transform: translateY(-0.8px) rotate(-135deg);
                }
            }
            .sr-only {
                display: none;
            }
        }
        .decoration {
            position: absolute;
            top: 30%;
            right: 20%;
            @media (max-width: 1024px) {
                display: none;
            }
        }
`
export const ContactForm = () => {
    const [list, setList] = useState([])
    const { changeContactFormStatus } = useContext(appContext)
    const [formData, setFormData] = useState({
        email: null,
        phone: null,
        message: null
    })
    const [errorData, setErrorData] = useState({
        email: null,
        phone: null,
        message: null,
        cat: null
    })
    const handleAddingCategories = (category) => {
        if(list.indexOf(category) === -1) {
            setList(prevState => [...prevState, category])
            setErrorData(prevState => ({
                ...prevState,
                cat: null
            }))
        } else {
            setList(prevState => prevState.filter(el => el !== category))
        }
    }
    const hashtagify = () => {
        const newList = list.map(el => '#' + el)
        return newList.join(' ')
    }
    const sendEmail = (e) => {
        e.preventDefault()
        const tags = hashtagify()
        const body = {
            ...formData,
            tags: tags
        }
        emailjs.send('default_service', 'template_fyltbjj', body, 'user_VfGpMuhECXdgJOEm13gzv')
            .then(response => {
                changeContactFormStatus(2)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(checkAll()) {
            sendEmail(e)
        }
    }
    const handleBlur = (name, value) => {

        if(name === 'email') {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!regex.test(value)) {
                setErrorData(prevState => ({
                    ...prevState,
                    email: "Incorrect Email"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    email: null
                }))
            }
        }

        // if(name === 'phone') {
        //     const regex = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
        //     if(!regex.test(value)) {
        //         setErrorData(prevState => ({
        //             ...prevState,
        //             phone: "Incorrect Phone Number"
        //         }))
        //     } else {
        //         setErrorData(prevState => ({
        //             ...prevState,
        //             phone: null
        //         }))
        //     }
        // }

        if(name === 'message') {
            if(!value || value?.length < 10) {
                setErrorData(prevState => ({
                    ...prevState,
                    message: "Message must contain at least 10 letters"
                }))
            } else {
                setErrorData(prevState => ({
                    ...prevState,
                    message: null
                }))
            }
        }
    }
    const handleChange = ({ value, name }) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const checkAll = () => {
        handleBlur('email', formData.email)
        handleBlur('phone', formData.phone)
        handleBlur('message', formData.message)
        if(list.length === 0) {
            setErrorData(prevState => ({
                ...prevState,
                cat: "Select at least one category"
            }))
        } else {
            setErrorData(prevState => ({
                ...prevState,
                cat: null
            }))
        }
        if(errorData.email || errorData.phone || errorData.message || !formData.email || !formData.phone || !formData.message || list.length === 0) {
            return false
        }
        return true
    }
    const categories = [
        'BRANDING', 
        'ANIMATIONS/3D',
        'VIDEO',
        'APPS',
        'eCOMMERCE',
        'UI/UX',
        'MARKETING STRATEGY',
        'SOCIAL MEDIA',
        'CONTENT MARKETING',
        'e-EVENTS',
        'SOFTWARE',
        'OTHER'
    ]
    const ContactVariant = {
        in: {
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        out: {
            y: '-100vh'
        },
        exit: {
            x: '-100vw',
            transition: {
                duration: 0.3
            }
        }
    }
    return (
        <Style
            variants={ContactVariant}
            animate="in"
            initial="out"
            exit="exit"
        >
            <h1>Let’s talk</h1>
            <p>We find inspiration to create in your challenges. Let us know what your brand needs.</p>
            <h4>How can we help you?</h4>
                <div className="boxes-cnt">
                { categories.map((category, index) => (
                   <label htmlFor={`checkbox${index}`} key={ index } className={document.getElementById(`checkbox${index}`)?.checked ? "box active" : "box"}>
                        <input type="checkbox" value={category} 
                        name={`checkbox${index}`}
                        id={`checkbox${index}`}
                        onChange={() => handleAddingCategories(category)} 
                    />
                    { category }
                   </label>
                )) }
            </div>
            <small className="error-msg cat">{ errorData.cat && errorData.cat}</small>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={event => handleChange(event.target)} onBlur={event => handleBlur(event.target.name, event.target.value)} type="email" name="email" />
                    <small className="error-msg">{ errorData.email && errorData.email}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input onChange={event => handleChange(event.target)} onBlur={event => handleBlur(event.target.name, event.target.value)} type="number" name="phone" />
                    <small className="error-msg">{ errorData.phone && errorData.phone}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={event => handleChange(event.target)} type="text" onBlur={event => handleBlur(event.target.name, event.target.value)} name="message"></textarea>
                    <small className="error-msg">{ errorData.message && errorData.message}</small>
                </div>
                <div className="btn-cnt">
                <button type="submit" className="form-submit">Submit</button>
                </div>
            </form>
            <button onClick={ () => changeContactFormStatus(0) } className="exit-btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <span className="sr-only">Close</span>
            </button>
            <img src={ContactFormImage} alt="decoration" className="decoration"/>
        </Style>
    )
}

// Thank You Card

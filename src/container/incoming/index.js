import React, { Component } from 'react'
import {Row,Col,Card,Form,Input,Select, Button } from 'antd'
import Header from '../Header'
import Footer from '../Footer'
import FormIncoming from './FormIncoming'

const { Meta } = Card;

class Incoming extends Component {
    render() {
        return (
            <div>
                <Header/>
                <FormIncoming/>
                <Footer/>
            </div>
        )
    }
}

export default Incoming

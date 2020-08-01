import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import {Row , Col} from 'antd'

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Col span={24}>
                    about
                </Col>
                <Footer />
            </div>
        )
    }
}

export default About

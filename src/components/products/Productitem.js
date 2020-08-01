import React, { Component } from 'react'
import { Row, Button,Col,List } from 'antd'

class Productitem extends Component {
    render() {
        const {proName,unitprice}=this.props
        return (
            <Row style={{border:'1px solid #000'}}>
                <Col>
                    <h5>{proName}</h5>
                    <p>{unitprice}</p>
                    <Button>buy</Button>
                </Col>
                
            </Row>
        )
    }
}

export default Productitem

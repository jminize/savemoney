import React, { Component } from 'react'
import { Row, Button } from 'antd'

class Calculator extends Component {

    showorder(orders){
        if(!orders || orders.length == 0){
            return(
                <li>ไม่มีสินค้า</li>
            )
        }else{
            return orders.map(item=>{
                return(
                <li>{item.product.proname} x {item.qty} = {item.qty*item.product.unitprice} <Button onClick={()=>this.props.delOrder(item)}>X</Button></li>
                )
            })
        }
        
    }
    render() {
        const {orders} = this.props
        return (
            <Row>
                <h1>{this.props.totalPrice}</h1>
                <hr style={{ width: '100%'}}/>
                <ul>
                    {this.showorder(orders)}
                </ul>
                <hr style={{ width: '100%'}}/>
                <Button style={{width:'100%'}} type="danger"> ยืนยัน</Button>
                <Button style={{width:'100%'}}>ยกเลิก</Button>
            </Row>
        )
    }
}

export default Calculator

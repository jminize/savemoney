import React, { Component } from 'react'
import { Row,Col,Button,Input  } from "antd";
import Calculator from './Calculator'
import Productlist from '../products/Productlist'

class Monitor extends Component {
    constructor(props){
        super(props)
        this.state={
            totalPrice:0,
            orders:[]
        }
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
    }

    addOrder(product){
        let { orders }=this.state
        let temporders = Object.assign([],orders)
        let findorder = orders.find(item=>item.product.proId == product.proId)
        if(findorder){
            findorder.qty++
        }else{
            temporders.push({product:product,qty:1})
        }
        let totalprice = this.state.totalPrice + parseInt(product.unitprice)
        this.setState({
            totalPrice:totalprice,
            orders : temporders
        })
    }

    delOrder( product ){
        let { orders }=this.state
        let temporders = Object.assign([],orders)
        let delproduct = temporders.filter(item=>{
            return item.product.proId != product.product.proId
        })
        let totalprice = this.state.totalPrice - (product.product.unitprice * product.qty)
        this.setState({totalPrice : totalprice , orders : delproduct})
    }
    render() {
        return (
            <Row>
                <Col span={18}>
                    <Productlist products={this.props.products} addOrder={this.addOrder} />
                </Col>
                <Col span={6}>
                    <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} delOrder={this.delOrder}/>
                </Col>
            </Row>
        )
    }
}

export default Monitor

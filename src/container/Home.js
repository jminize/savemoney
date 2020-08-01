import React, { Component } from 'react'
import { Row,Col,Button,Input  } from "antd";
import Header from './Header'
import Footer from './Footer'
import Monitor from '../components/monitor/Monitor'
export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[
        {
          proId:1,proname:'aa',unitprice:120
        },
        {
          proId:2,proname:'bb',unitprice:130
        },
        {
          proId:3,proname:'bbc',unitprice:131
        },
        {
          proId:4,proname:'bbd',unitprice:132
        },
        {
          proId:5,proname:'bbb',unitprice:133
        }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <Header/>
          <Monitor products={this.state.products}/>
        <Footer/>
      </div>
    )
  }
}

export default Home

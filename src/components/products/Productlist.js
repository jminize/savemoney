import React, { Component } from 'react'
import { Row, Button,List,Card } from 'antd'

class Productlist extends Component {
    // showProduct(){
    //         return this.props.products && this.props.products.map(item=>(
    //             <Productitem proName={item.proname} unitprice={item.unitprice}/>
    //         ))
    // }
    render() {
        return (
            <Row style={{paddingLeft:20,paddingRight:20}}>
                <List
                    style={{width:'100%'}}
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.props.products}
                    renderItem={ item => (
                    <List.Item>
                        <Card 
                            title={item.proname} 
                            actions={[
                                <Button type="primary" style={{width:'100%'}} onClick={()=> this.props.addOrder(item)}>buy</Button>
                                
                            ]}
                        >
                            {item.unitprice} THB
                        </Card>
                        
                    </List.Item>
                    )}
                />
            </Row>
        )
    }
}

export default Productlist

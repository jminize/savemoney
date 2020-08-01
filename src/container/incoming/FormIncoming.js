import React, { Component } from 'react'
import {Row,Col,Card,Form,Input,Select, Button } from 'antd'

const { Meta } = Card;

class Incoming extends Component {
    render() {
        return (
            <Row>
                <Col style={{ width:'100%' }}>
                <Card
                    title={'test'}
                    // hoverable
                    style={{ width: '80%',textAlign:'center',margin:'20px auto' }}
                >
                    <Form>
                        <Form.Item
                            label="กรอกจำนวนงิน"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            label="เลือกประเภท"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Select>
                                <Select.Option value="1">เงินเดือน</Select.Option>
                                <Select.Option value="2">คืนเงิน</Select.Option>
                                <Select.Option value="3">เงินออม</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button>Button</Button>
                        </Form.Item>
                    </Form>
                </Card>
                </Col>
            </Row>
        )
    }
}

export default Incoming

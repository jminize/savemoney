import React, { Component } from 'react'
import { Row, Col,Layout, Menu, Breadcrumb } from 'antd'
import { Link , withRouter } from 'react-router-dom'

const { SubMenu } = Menu;
const { Header } = Layout;

export class MainHeader extends Component {
    render() {
        const { match, location, history } = this.props
        console.log('location',location)
        return (
            <Header>
            {/* <div style={{width: '120px',
                height: '31px',
                background: '#fff',
                margin: '16px 24px 16px 0',
                float: 'left'}}/> */}
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} style={{textAlign:'right'}}>
                <Menu.Item key="/">
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/incoming">
                    <Link to="/incoming">
                        รายรับ
                    </Link>
                </Menu.Item>
                <SubMenu key="incomin" title="รายรับ">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="out" title="รายจ่าย">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
            </Menu>
            </Header>
        )
    }
}

export default withRouter(MainHeader)

import "./DashboardPage.css";
import React, {useState} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined,} from '@ant-design/icons';
import {Avatar, Col, Layout, Menu, Row, theme} from 'antd';

import {
    MdAddCircleOutline,
    MdCategory,
    MdFormatListBulleted,
    MdHome,
    MdInsertChartOutlined,
    MdLogout,
    MdManageAccounts,
    MdOutlineInventory2,
    MdOutlineShoppingBag,
    MdRequestPage,
    MdSupervisorAccount
} from "react-icons/all";



const {Header, Sider, Content} = Layout;


function DashboardPage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <MdHome/>,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <MdCategory/>,
                            label: 'Category',
                            children: [
                                {
                                    key: '21',
                                    icon: <MdAddCircleOutline/>,
                                    label: 'Add Category',
                                },
                                {
                                    key: '22',
                                    icon: <MdFormatListBulleted/>,
                                    label: 'List Category',
                                },
                            ]
                        },
                        {
                            key: '3',
                            icon: <MdOutlineInventory2/>,
                            label: 'Products',
                        },
                        {
                            key: '4',
                            icon: <MdOutlineShoppingBag/>,
                            label: 'Orders',
                        },
                        {
                            key: '5',
                            icon: <MdRequestPage/>,
                            label: 'Invoices',
                        },
                        {
                            key: '6',
                            icon: <MdInsertChartOutlined/>,
                            label: 'Statistics',
                        },
                        {
                            key: '7',
                            icon: <MdManageAccounts/>,
                            label: 'Profiles',
                        },
                        {
                            key: '8',
                            icon: <MdSupervisorAccount/>,
                            label: 'Accounts',
                        },
                        {
                            key: '9',
                            icon: <MdLogout/>,
                            label: 'Logout',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Row>
                        <Col md={18}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </Col>

                        <Col md={6}>
                            <div>
                                <Avatar size='default' icon={<UserOutlined/>}></Avatar> Vu Van Cuong
                            </div>
                        </Col>
                    </Row>


                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>);
}

export default DashboardPage;



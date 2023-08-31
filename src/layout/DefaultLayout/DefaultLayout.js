import React from 'react';
import {Layout} from 'antd';
import {Outlet} from "react-router-dom";
import SiderMenu from "./SiderMenu";

const {Header, Footer, Sider, Content} = Layout;

const layoutStyle = {
    height: "100%",
    display: "flex"
}

const headerStyle = {
    backgroundColor: "#002a48",
    color: "white"
}

const mainStyle = {
    flex: 1,
    display: "flex"
}

const siderStyle = {
    backgroundColor: "#ffffff",
    borderRight: "gray 1px solid",
    display: "auto"
}

const contentStyle = {
    overflow: "auto",
    flex: 1
}

function DefaultLayout(props) {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>React学习项目</Header>
            <Layout style={mainStyle} hasSider>
                <Sider style={siderStyle}>
                    <SiderMenu/>
                </Sider>
                <Content style={contentStyle}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    );
}

export default DefaultLayout;

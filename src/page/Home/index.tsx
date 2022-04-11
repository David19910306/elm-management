import React, {useState} from 'react'
import {Breadcrumb, Layout, Menu} from "antd";
import {
  EditOutlined,
  ExclamationCircleFilled,
  PlusOutlined,
  SettingOutlined,
  SnippetsOutlined,
  StarOutlined
} from "@ant-design/icons";

import './index.scss'

const {Sider, Header, Content, Footer} = Layout
const {SubMenu} = Menu

export default function Home() {

  const [collapsed, setCollapsed] = useState(false)

  function handleClick(e: Record<string, any>) {
    console.log(e)
  }

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapsed => {
        setCollapsed(collapsed)
      }} width={300}>
        <div className='logo'></div>
        <Menu theme="dark" mode="inline" onClick={handleClick}>
          <SubMenu key="sub1" icon={<SnippetsOutlined/>} title='数据管理'>
            <Menu.Item key='1'>用户列表</Menu.Item>
            <Menu.Item key='2'>商家列表</Menu.Item>
            <Menu.Item key='3'>订单列表</Menu.Item>
            <Menu.Item key='4'>食品列表</Menu.Item>
            <Menu.Item key='5'>管理员列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PlusOutlined/>} title='添加数据'>
            <Menu.Item key='6'>添加商铺</Menu.Item>
            <Menu.Item key='7'>添加商品</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<StarOutlined/>} title='图标'>
            <Menu.Item key='8'>用户分布</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' icon={<EditOutlined/>} title='编辑'>
            <Menu.Item key='9'>文本编辑</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' icon={<SettingOutlined/>} title='设置'>
            <Menu.Item key='10'>管理员设置</Menu.Item>
          </SubMenu>
          <SubMenu key='sub6' icon={<ExclamationCircleFilled/>} title='说明'>
            <Menu.Item key='11'>说明</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{padding: 0}}></Header>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-background' style={{padding: 24, height: '100%'}}>
            Bill is a cat
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
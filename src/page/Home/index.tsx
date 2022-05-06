import React, {Suspense, useState} from 'react'
import {Breadcrumb, Layout, Menu, Spin} from "antd";
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {
  EditOutlined,
  ExclamationCircleFilled,
  HomeOutlined,
  PlusOutlined,
  SettingOutlined,
  SnippetsOutlined,
  StarOutlined
} from "@ant-design/icons";
import {AdminList, FoodList, Main, OrderList, ShopList, UserList} from "@/router";
import './index.scss'

const {Sider, Content, Footer} = Layout
const {SubMenu} = Menu

export default function Home() {

  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate() // 点击的路由跳转

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapsed => {
        setCollapsed(collapsed)
      }} width={300}>
        <div className='logo'><img src='https://img.alicdn.com/tfs/TB10aMXfaNj0u4jSZFyXXXgMVXa-500-128.svg' alt=""/></div>
        <Menu theme="dark" mode="inline" onSelect={e => {
          navigate(`${e.key}`)
        }}>
          <Menu.Item key='main' icon={<HomeOutlined/>}>首页</Menu.Item>
          <SubMenu key="sub1" icon={<SnippetsOutlined/>} title='数据管理'>
            <Menu.Item key='user'>用户列表</Menu.Item>
            <Menu.Item key='shop'>商家列表</Menu.Item>
            <Menu.Item key='order'>订单列表</Menu.Item>
            <Menu.Item key='food'>食品列表</Menu.Item>
            <Menu.Item key='admin'>管理员列表</Menu.Item>
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
        {/* <Header className='site-layout-background' style={{padding: 0}}></Header> */}
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-background' style={{padding: 24, height: '100%'}}>
            <Suspense fallback={<div className='loading-Container'><Spin/></div>}>
              <Routes>
                <Route path='main' element={<Main/>}/>
                <Route path='user' element={<UserList/>}/>
                <Route path='shop' element={<ShopList/>}/>
                <Route path='order' element={<OrderList/>}/>
                <Route path='food' element={<FoodList/>}/>
                <Route path='admin' element={<AdminList/>}/>
                <Route path='' element={<Navigate to='main'/>}/>
              </Routes>
            </Suspense>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

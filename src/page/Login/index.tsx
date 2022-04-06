import React from 'react';
import Particles from "react-tsparticles";
import params from "./particleOptions";
import './index.scss'
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function Login(): JSX.Element {

  // 表单完成验证
  function onFinish() {

  }

  return (
    <div style={{backgroundColor: '#333', height: '100%', overflow: 'hidden'}}>
      <Particles id='login-particles' params={params}/>
      <div className='login'>
        <h2 style={{fontSize: '34px', color: '#fff'}}>elm后台管理系统</h2>
        <Form name='normal_login' className='login-form' initialValues={{remembered: true}} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Please input your Username!'}]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: 'Please input your Password!'}]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

import React from 'react';
import Particles from "react-tsparticles";
import params from "./particleOptions";
import './index.scss'
import {Form, Input} from "antd";

export default function Login(): JSX.Element {

  // 表单完成
  const onFinish = (value: { [prosName: string]: any }) => {
    console.log('onFinish', value)
  }

  return (
    <div style={{backgroundColor: '#333', height: '100%', overflow: 'hidden'}}>
      <Particles id='login-particles' params={params}/>
      <div className='login'>
        <h2 style={{fontSize: '34px', color: '#fff'}}>elm后台管理系统</h2>
        <div className='login-form'>
          <Form className='el-form' onFinish={onFinish} name='basic'>
            <Form.Item name='userName' rules={[{required: true, message: 'Please input your username!'}]}>
              <Input placeholder='用户名'/>
            </Form.Item>
            <Form.Item rules={[{required: true, message: 'Please input your password!'}]} name='password'>
              <Input.Password placeholder='密码'/>
            </Form.Item>
            <Form.Item>
              <button type="submit"><span>登录</span></button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

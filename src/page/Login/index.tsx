import React from 'react';
import Particles from "react-tsparticles";
import params from "./particleOptions";
import {Form, Input} from "antd";
import login from "../../api/login"
import {ILoginParams} from "../../interface/login";
import './index.scss'

export default function Login(): JSX.Element {

  // 表单完成
  const onFinish = async (value: ILoginParams) => {
    const result = await login().login('/api/admin/login', 'POST', value)
    console.log(result)
  }

  return (
    <div style={{backgroundColor: '#333', height: '100%', overflow: 'hidden'}}>
      <Particles id='login-particles' params={params}/>
      <div className='login'>
        <h2 style={{fontSize: '34px', color: '#fff'}}>elm后台管理系统</h2>
        <div className='login-form'>
          <Form className='el-form' onFinish={onFinish} name='basic'>
            <Form.Item name='user_name' rules={[{required: true, message: 'Please input your username!'}]}>
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

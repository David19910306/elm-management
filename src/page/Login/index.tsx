import React, {useState} from 'react';
import Particles from "react-tsparticles";
import {useNavigate} from "react-router-dom";
import params from "./particleOptions";
import {Form, Input} from "antd";
// @ts-ignore
import login from "@/api/login"
// @ts-ignore
import {ILoginParams, responseDataType} from "@/interface/login";
import './index.scss'

export default function Login(): JSX.Element {

  const navigate = useNavigate() // 路由编程式跳转的钩子
  const [loginStatus, setLoginStatus] = useState(false)

  // 表单完成
  const onFinish = async (value: ILoginParams) => {
    const result = await login().login('/api/admin/login', 'POST', value)
    const data: responseDataType = result.data
    // 登录成功 --> 跳转到首页
    data.status === 1 ? navigate('/index/*') : setLoginStatus(data.status === 0)
  }

  return (
    <div style={{backgroundColor: '#333', height: '100%', overflow: 'hidden'}}>
      <Particles id='login-particles' params={params}/>
      <div className='login'>
        <h2>elm后台管理系统</h2>
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
              <p style={{'display': loginStatus ? '' : 'none'}}>登录失败，请检查用户名和密码是否正确</p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

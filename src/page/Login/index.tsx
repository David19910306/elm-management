import React from 'react';
import Particles from "react-tsparticles";
import params from "./particleOptions";
import './index.scss'

export default function Login(): JSX.Element {

  return (
    <div style={{backgroundColor: '#333', height: '100%', overflow: 'hidden'}}>
      <Particles id='login-particles' params={params}/>
      <div className='login'>我是登录</div>
    </div>
  )
}

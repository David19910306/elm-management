import React, {Fragment} from 'react';
import Login from '../src/page/Login'
import Home from "./page/Home";
import {Navigate, Route, Routes} from 'react-router-dom';

import './App.scss'

export default function App() {
  // console.log(elements)
  // 根据路由表生成路由规则，暂时注释
  // const element = useRoutes(elements)
  return (
    <Fragment>
      {/* <RouterView children={elements}></RouterView> */}
      {/*{element}*/}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/index/*' element={<Home/>}/>
        <Route path='/' element={<Navigate to='/login'/>}/>
      </Routes>
    </Fragment>
  );
}

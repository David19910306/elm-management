import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
// import elements from './router'
import Login from "./page/Login";
import Home from "./page/Home";

import './App.scss'

function App() {
  // 根据路由表生成路由规则，暂时注释
  // const element = useRoutes(elements)
  return (
    <Fragment>
      {/*{element}*/}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/index' element={<Home/>}/>
        <Route path='/' element={<Navigate to='/login'/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;

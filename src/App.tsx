import React from 'react';
import Login from '../src/page/Login'
import Home from "./page/Home";
import {Navigate, Route, Routes} from 'react-router-dom';
import {AdminList, FoodList, Main, OrderList, ShopList, UserList} from "../src/router";

import './App.scss'

export default function App() {
  // console.log(elements)
  // 根据路由表生成路由规则，暂时注释
  // const element = useRoutes(elements)
  return (
    <div>
      {/*<RouterView children={elements}></RouterView>*/}
      {/*{element}*/}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/index' element={<Home/>}>
          <Route path='main' element={<Main/>}/>
          <Route path='user' element={<UserList/>}/>
          <Route path='shop' element={<ShopList/>}/>
          <Route path='order' element={<OrderList/>}/>
          <Route path='food' element={<FoodList/>}/>
          <Route path='admin' element={<AdminList/>}/>
        </Route>
        <Route path='/' element={<Navigate to='/login'/>}/>
      </Routes>
    </div>
  );
}

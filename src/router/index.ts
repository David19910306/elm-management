import {lazy, LazyExoticComponent} from "react";
// import {Navigate, Redirect} from "react-router-dom";
// import Login from '../page/Login'

interface IRoutes {
  path: string,
  element: LazyExoticComponent<any>,
  exact?: boolean,
  title?: string,
  icon?: string,
  children?: IRoutes[]
}

export const Main = lazy(() => import('../page/Home/main'))
export const AdminList = lazy(() => import('../page/Management/adminList'))
export const FoodList = lazy(() => import('../page/Management/foodList'))
export const OrderList = lazy(() => import('../page/Management/orderList'))
export const ShopList = lazy(() => import('../page/Management/shopList'))
export const UserList = lazy(() => import('../page/Management/userList'))

// 路由表的整合
const elements: IRoutes[] = [
  {
    path: '/login',
    element: lazy(() => import('../page/Login'))
  },
  {
    path: '/index',
    element: lazy(() => import('../page/Home')),
    exact: true,
    children: [
      {
        path: 'main',
        element: Main
      }
    ]
  },
  {
    path: '/',
    // redirect: '/login'
    element: lazy(() => import('../page/Login'))
  }
]

export default elements

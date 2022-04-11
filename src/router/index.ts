import {lazy} from "react";
// import {Navigate} from "react-router-dom";
// import Login from '../page/Login'

// interface IRoutes {
//   path: string,
//   element: JSX.Element
// }

export const Home = lazy(() => import('../page/Home'))

// 路由表的整合
// const routes: IRoutes[] = [
//   {
//     path: '/login',
//     element: <Login/>
//   },
//   {
//     path: '/index',
//     element: Home
//   },
//   {
//     path: '/',
//     element: <Navigate to="/login" />
//   }
// ]
//
// export default routes

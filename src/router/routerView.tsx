import React, {Fragment} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

export interface IRouteViewProps {
  path?: string;
  redirect?: string;
  component?: any;
  children?: IRouteViewProps[];
}

export default function RouterView(props: IRouteViewProps) {
  return (
    <Fragment>
      {props.children &&
        props.children.map((item, index) => {
          if (item.redirect) {
            return (
              <Navigate
                key={index}
                to={item.redirect}
              ></Navigate>
            );
          }
          return (
            <Routes>
              <Route
                key={index}
                path={item.path as string}
                // render={(props: any) => {
                //   return (
                //     item.component && (
                //       <item.component
                //         children={item.children}
                //         {...props}
                //       ></item.component>
                //     )
                //   );
                // }}
              ></Route>
            </Routes>
          );
        })}
    </Fragment>
  );
}

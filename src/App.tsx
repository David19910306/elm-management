import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./page/Login";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Navigate to='/login'/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;

import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./page/Login";

// import './App.scss'

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

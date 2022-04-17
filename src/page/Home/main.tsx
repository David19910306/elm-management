import React from 'react';
import {Col, Row} from "antd";

import './main.scss'

export default function Main() {
  const style = {padding: '8px 0', backgroundColor: '#e5e9f2'}
  return (
    <div className='main-container'>
      <h2>数据统计</h2>
      <section className='statisticsNumber'>
        <Row className='row-statistics'>
          <Col className='title-col' span={4}>当日数据</Col>
          <Col className='data-col' span={4}><span>5</span>新增用户</Col>
          <Col className='data-col' span={4}><span>1</span>新增订单</Col>
          <Col className='data-col' span={4}><span>31</span>新增管理员</Col>
        </Row>
        <Row className='row-statistics'>
          <Col className='whole-col' span={4}>总数据</Col>
          <Col className='data-col' span={4}><span>66328</span>注册用户</Col>
          <Col className='data-col' span={4}><span>30193</span>订单</Col>
          <Col className='data-col' span={4}><span>115504</span>管理员</Col>
        </Row>
      </section>
    </div>
  )
}

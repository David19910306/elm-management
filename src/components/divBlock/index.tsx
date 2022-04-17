import React from 'react';
import {Col, Row} from 'antd'

export default function DivBlock() {
  return (
    <div className='div-block'>
      <Row justify='space-around'>
        <Col span={4}>当日数据</Col>
      </Row>
    </div>
  )
}

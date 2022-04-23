import React from 'react';
import {Col, Row} from "antd";
import * as echarts from "echarts";
import EchartsComponent from "@/components/echarts";
import './main.scss'

type EChartsOptions = echarts.EChartsOption

export default function Main() {
  const options: EChartsOptions = {
    title: {
      text: 'Temperature Change in the Coming Week'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        markPoint: {
          data: [
            {type: 'max', name: 'Max'},
            {type: 'min', name: 'Min'}
          ]
        },
        markLine: {
          data: [{type: 'average', name: 'Avg'}]
        }
      },
      {
        name: 'Lowest',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
        },
        markLine: {
          data: [
            {type: 'average', name: 'Avg'},
            [
              {
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              },
              {
                symbol: 'circle',
                label: {
                  position: 'start',
                  formatter: 'Max'
                },
                type: 'max',
                name: '最高点'
              }
            ]
          ]
        }
      }
    ]
  }
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
      <EchartsComponent options={options} style={{height: '500px', width: '80%', marginTop: '60px'}}/>
    </div>
  )
}

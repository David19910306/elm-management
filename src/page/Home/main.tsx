import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import * as echarts from "echarts";
import EchartsComponent from "@/components/echarts";
import './main.scss'
import {getLately7Days} from "@/utils";

type EChartsOptions = echarts.EChartsOption

export default function Main() {

  // 获取x轴的最近7天的日期
  const [lastDate, setDate] = useState<string[]>([])

  // 组件加载后自动获取
  useEffect(() => {
    const lately7days = getLately7Days()
    setDate(lately7days)
  }, [])

  const options: EChartsOptions = {
    title: {
      text: '走势图'
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
      data: lastDate
    },
    yAxis: [{
      type: 'value',
      name: '用户',
      position: 'left',
      min: 0,
      max: 200,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      },
      axisLine: {
        show: true
      }
    }, {
      type: 'value',
      name: '订单',
      position: 'right',
      min: 0,
      max: 200,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      },
      axisLine: {
        show: true
      }
    }],
    series: [
      {
        name: '新注册用户',
        type: 'line',
        data: [39, 20, 15, 20, 9, 6, 0],
        markPoint: {
          data: [
            {type: 'max', name: 'Max'},
            {type: 'min', name: 'Min'}
          ]
        }
      },
      {
        name: '新增订单',
        type: 'line',
        data: [6, 8, 15, 127, 11, 2, 0],
        markPoint: {
          data: [{name: '周最高', type: 'max'}]
        }
      },
      {
        name: '新增管理员',
        type: 'line',
        data: [65, 63, 73, 55, 30, 25, 7],
        markPoint: {
          data: [{name: '周最高', type: 'max'}, {name: '周最低', type: 'min'}]
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

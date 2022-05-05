import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import httpRequest from '@/api'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import ShopDetail from '@/components/shopDetail'
import ShopDialog from '@/components/dialog'

export default function ShopList() {

  const [dataSource, setDataSource] = useState([])
  const [total, setTotal] = useState(0) // 总的用户个数
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState<Record<string, any>>({}) // 当前城市
  const [currentPage, setCurrentPage] = useState(1) // 当前的页数，默认为第一页
  const [isModalVisible, setIsModalVisible] = useState(false) // 设置对话框的显示和隐藏

  const columns = [{
    title: <strong>序号</strong>,
    dataIndex: 'index',
    key: 'index',
    render: (text: string, record: Record<string, any>, index: number) => `${index + 1 + (currentPage - 1) * 20}`
  }, {
    title: <strong>店铺名称</strong>,
    dataIndex: 'name',
    key: 'name'
  }, {
    title: <strong>店铺地址</strong>,
    dataIndex: 'address',
    key: 'address'
  }, {
    title: <strong>店铺介绍</strong>,
    dataIndex: 'description',
    key: 'description'
  }, {
    title: <strong>操作</strong>,
    dataIndex: 'operation',
    key: 'operation',
    render: (_:string) => {
      return (
        <div>
          <Button size='small' style={{fontSize:'12px'}} onClick={() => {setIsModalVisible(true)}}>编辑</Button>&nbsp;&nbsp;
          <Button size='small' style={{fontSize:'12px'}}>添加食品</Button>&nbsp;&nbsp;
          <Button size='small' type='primary' danger style={{fontSize:'12px'}}>删除</Button>
        </div>
      )
    }
  }]

  useEffect(() => {
    setLoading(true)
    // 请求后台更新数据
    httpRequest('/api/v1/cities', 'GET', {type: 'guess'}).then(result => {
      // console.log(result)
      result.status === 200 && setCity(result.data)
    })

    // 获取更新的count
    httpRequest('/api/shopping/restaurants/count', 'GET').then(result => {
      // console.log(result)
      result.status === 200 && setTotal(result.data.count)
    })

    // 获取更新的商铺列表
    if (city) {
      httpRequest('/api/shopping/restaurants', 'GET', {latitude: `${city.latitude}`, longitude: `${city.longitude}`, offset: 0, limit: 20}).then(response => {
        setLoading(false)
        setDataSource(response.data.map((data: Record<string, any>) => ({key: data.id, ...data})))
      })
    }

  }, [])

  function showTotal(total:number) {
    // console.log(total)
    return () => `共 ${total} 条`
  }

  // 点击切换页面时的回调
  async function onChange(page: number, pageSize: number) {
    setLoading(true)
    setCurrentPage(page)
    const result = await httpRequest('/api/shopping/restaurants', 'GET', {latitude: `${city.latitude}`, longitude: `${city.longitude}`, offset: (page - 1) * 20, limit: pageSize})
    // console.log(result)
    if (result.status === 200) {
      setLoading(false)
      setDataSource(result.data.map((data: Record<string, any>) => ({key: data.id, ...data})))
    }
  }

  return (
    <>
      <Table columns={columns} loading={loading}
          pagination={{
            position: ['bottomLeft'],
            showTotal: showTotal(total),
            pageSize: 20,
            total,
            onChange
          }}
          expandable={{
            expandIcon: ({expanded, onExpand, record}) =>
              expanded?
              <DownOutlined onClick={e => onExpand(record, e)}/>:
              <RightOutlined onClick={e => onExpand(record, e)}/>,
            expandedRowRender: record => <ShopDetail record={record} />
          }}
          dataSource={dataSource}/>

      {
        isModalVisible && <ShopDialog isModalVisible={isModalVisible} setModalVisible={(visible: boolean) => {setIsModalVisible(visible)}} />
      }
    </>
  )
}

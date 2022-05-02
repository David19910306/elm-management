import React, {useEffect, useState} from 'react'
import {Table} from "antd";
import httpRequest from "@/api";

export default function UserList() {

  const columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: (text: string, record: Record<string, any>, index: number) => `${index + 1 + (currentPage - 1) * 20}`
  }, {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '注册日期',
    dataIndex: 'registe_time',
    key: 'registe_time'
  }, {
    title: '用户姓名',
    dataIndex: 'username',
    key: 'username'
  }, {
    title: '注册地址',
    dataIndex: 'city',
    key: 'city'
  }]

  const [dataSource, setDataSource] = useState([])
  const [total, setTotal] = useState(0) // 总的用户个数
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) // 当前的页数，默认为第一页
  useEffect(() => {
    setLoading(true)
    httpRequest('/api/v1/users/count', 'GET').then(response => {
      // console.log(response)
      response.data.status === 1 && setTotal(response.data.count)
    })

    httpRequest('/api/v1/users/list', 'GET', {offset: 0, limit: 20}).then(response => {
      // console.log(response)
      setLoading(false)
      response.status === 200 && setDataSource(response.data.map((data: Record<string, any>) => ({key: data.user_id, ...data})))
    })
  }, [])

  // 总共的条数
  function showTotal(total: number) {
    return () => `共 ${total} 条`
  }

  // 点击切换页面时的回调
  async function onChange(page: number, pageSize: number) {
    setLoading(true)
    setCurrentPage(page)
    const result = await httpRequest('/api/v1/users/list', 'GET', {offset: (page - 1) * 20, limit: pageSize})
    // console.log(result)
    if (result.status === 200) {
      setLoading(false)
      setDataSource(result.data.map((data: Record<string, any>) => ({key: data.user_id, ...data})))
    }
  }

  return (
    <Table columns={columns} loading={loading}
           pagination={{
             position: ['bottomLeft'],
             showTotal: showTotal(total),
             pageSize: 20,
             total,
             onChange
           }}
           dataSource={dataSource}/>
  )
}

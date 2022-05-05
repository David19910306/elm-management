import httpRequest from '@/api'
import Option from '@/interface/options'
import IProps from '@/interface/props'
import { Cascader, Form, Image, Input, Modal } from 'antd'
import { useEffect, useState } from 'react'

export default function ShopDialog(props: IProps) {

  const [options, setOptions] = useState<Option[]>([]) // 下拉框中的选项

  useEffect(() => {
    httpRequest('/api/shopping/v2/restaurant/category', 'GET').then(response => {
      console.log(response)
      response.status === 200 && setOptions(response.data.map((option:Record<string, any>) => {
        return {
          value: option.id,
          label: option.name,
          isLeaf: option.sub_categories.length === 0,
          children: option.sub_categories.map((sub:Record<string, any>) => {
            return {
              value: sub.id,
              label: sub.name
            }
          })
        }
      }))
    })
  }, [])

  // 对话框确定
  function handleOk() {
    props.setModalVisible && props.setModalVisible(false)
  }

  // 对话框取消
  function handleCancel(){
    props.setModalVisible && props.setModalVisible(false)
  }

  // 数据加载
  // function loadData(){
  //
  // }

  function onOptionsChange() {

  }

  return <Modal
      visible={props.isModalVisible}
      title={<strong>修改店铺信息</strong>}
      onOk={handleOk}
      onCancel={handleCancel}
      width="50%"
    >
      <Form
        name="shopDetail"
      >
        <Form.Item
          label="店铺名称"
          name="name"
        >
          <Input />
        </Form.Item>
        <Form.Item label="详细地址" name="address" extra={<span style={{marginTop: '15px'}}>当前城市：深圳</span>}>
          <Input />
        </Form.Item>
        <Form.Item label="店铺介绍" name="introduction">
          <Input />
        </Form.Item>
        <Form.Item label="联系电话" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="店铺分类" name="category" style={{width: '250px'}}>
          <Cascader options={options} onChange={onOptionsChange} changeOnSelect />
        </Form.Item>
        <Form.Item label="商铺图片" name="image">
          <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
        </Form.Item>
      </Form>
    </Modal>
}

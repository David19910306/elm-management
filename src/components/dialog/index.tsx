import IProps from '@/interface/props'
import {Cascader, Form, Image, Input, Modal} from 'antd'
import httpRequest from "@/api";
import {useEffect, useState} from "react";
import Option from "@/interface/options";

export default function ShopDialog(props: IProps) {
  const {record} = props
  const array = record ? record.category.split('/') : []
  const [options, setOptions] = useState<Option[]>([]) // 下拉框中的选项

  useEffect(() => {
    // 页面加载时候获取数据
    // 获取餐馆种类
    httpRequest('/api/shopping/v2/restaurant/category', 'GET').then(response => {
      response.status === 200 && setOptions(response.data.map((option: Record<string, any>) => {
        return {
          value: option.name,
          label: option.name
          // children: option.sub_categories.map((sub: Record<string, any>) => {
          //   return {
          //     value: sub.name,
          //     label: sub.name
          //   }
          // })
        }
      }))
    })
  }, [])

  function loadData(selected: any) {
    console.log(selected)
  }

  // 对话框确定
  function handleOk() {
    props.setModalVisible && props.setModalVisible(false)
  }

  // 对话框取消
  function handleCancel() {
    props.setModalVisible && props.setModalVisible(false)
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
      initialValues={{
        name: record?.name,
        address: record?.address,
        description: record?.description,
        phone: record?.phone,
        category: array
      }}
    >
      <Form.Item
        label="店铺名称"
        name="name"
      >
        <Input/>
      </Form.Item>
      <Form.Item label="详细地址" name="address" extra={<span style={{marginTop: '15px'}}>当前城市：深圳</span>}>
        <Input/>
      </Form.Item>
      <Form.Item label="店铺介绍" name="description">
        <Input/>
      </Form.Item>
      <Form.Item label="联系电话" name="phone">
        <Input/>
      </Form.Item>
      <Form.Item label="店铺分类" name="category" style={{width: '275px'}}>
        <Cascader options={options || []}/>
      </Form.Item>
      <Form.Item label="商铺图片" name="image">
        <Image width={200} src={`https://elm.cangdu.org/img/${record ? record.image_path : ''}`}/>
      </Form.Item>
    </Form>
  </Modal>
}

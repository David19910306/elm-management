import IProps from '@/interface/props'
import { Cascader, Form, Image, Input, Modal } from 'antd'
import { useEffect } from 'react'

export default function ShopDialog(props: IProps) {
  const {record, myOptions}  = props
  const array = record? record.category.split('/'): []

  // 对话框确定
  function handleOk() {
    props.setModalVisible && props.setModalVisible(false)
  }

  // 对话框取消
  function handleCancel(){
    props.setModalVisible && props.setModalVisible(false)
  }

  console.log(record, myOptions)
  return myOptions?.length !== 0 && record? <Modal
      visible={props.isModalVisible}
      title={<strong>修改店铺信息</strong>}
      onOk={handleOk}
      onCancel={handleCancel}
      width="50%"
    >
      <Form
        name="shopDetail"
        initialValues={{
          name: record.name,
          address: record.address,
          description: record.description,
          phone: record.phone,
          category: array
        }}
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
        <Form.Item label="店铺介绍" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="联系电话" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="店铺分类" name="category" style={{width: '275px'}}>
          <Cascader options={myOptions} />
        </Form.Item>
        <Form.Item label="商铺图片" name="image">
          <Image width={200} src={`https://elm.cangdu.org/img/${record? record.image_path: ''}`}/>
        </Form.Item>
      </Form>
    </Modal>: <></>
}

import IProps from '@/interface/props'
import {Cascader, Form, Input, message, Modal, Upload} from 'antd'
import httpRequest from "@/api";
import {useEffect, useState} from "react";
import Option from "@/interface/options";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import info from '../message';

export default function ShopDialog(props: IProps) {
  const {record} = props
  const array = record ? record.category.split('/') : []
  const [options, setOptions] = useState<Option[]>([]) // 下拉框中的选项
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    // 页面加载时候获取数据
    // 获取餐馆种类
    (async function loadOptions(){
      const response = await httpRequest('/api/shopping/v2/restaurant/category', 'GET')
      const category = response.data.map((option: Record<string, any>) => {
        return {
          value: option.name,
          label: option.name,
          children: option.sub_categories.map((sub: Record<string, any>) => {
            return {
              value: sub.name,
              label: sub.name
            }
          })
        }
      })
      setOptions(category)
    })()
  }, [])

  // 对话框确定
  async function handleOk() {
    // 提交修改的信息
    if(record){
      const result = await httpRequest('/api/shopping/updateshop', 
        'POST', undefined, {...form.getFieldsValue(), 
        id: record.id,
        category: form.getFieldValue('category').join('/'), 
        image_path: record.image_path
      })
      const {data} = result
      info(data) // 修改之后的提示信息
      props.setModalVisible && props.setModalVisible(false)
    }
  }

  // 对话框取消
  function handleCancel() {
    props.setModalVisible && props.setModalVisible(false)
  }

  // normalFile
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  // UploadButton
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return <Modal
    visible={props.isModalVisible}
    title={<strong>修改店铺信息</strong>}
    onOk={handleOk}
    okText="确定"
    cancelText="取消"
    onCancel={handleCancel}
    width="50%"
  >
    <Form
      name="shopDetail"
      form={form}
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
        <Cascader options={options} />
      </Form.Item>
      <Form.Item label="商铺图片" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
        >
          {record ? <img width={200} src={`https://elm.cangdu.org/img/${record.image_path}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
    </Form>
  </Modal>
}

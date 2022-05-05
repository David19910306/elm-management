import IProps from "@/interface/props";
import React from "react";
import './index.scss'

export default function ShopDetail(props: IProps){
  const {record} = props
  return (
    <table className="shop-detail">
      <tbody>
        <tr className="tr">
          <td className="td-name">店铺名称</td>
          <td className="td-value">{record? record.name: ''}</td>
          <td className="td-name">店铺地址</td>
          <td className="td-value">{record? record.address: ''}</td>
        </tr>
        <tr className="tr">
          <td className="td-name">店铺介绍</td>
          <td className="td-value">{record? record.description: ''}</td>
          <td className="td-name">店铺ID</td>
          <td className="td-value">{record? record.id: ''}</td>
        </tr>
        <tr className="tr">
          <td className="td-name">联系电话</td>
          <td className="td-value">{record? record.phone: ''}</td>
          <td className="td-name">评分</td>
          <td className="td-value">{record? record.rating: ''}</td>
        </tr>
        <tr className="tr">
          <td className="td-name">销售量</td>
          <td className="td-value">{record? record.recent_order_num: ''}</td>
          <td className="td-name">分类</td>
          <td className="td-value">{record? record.category: ''}</td>
        </tr>
      </tbody>
    </table>
  )
}
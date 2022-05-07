import { message } from "antd";

  // 提示信息
export default function info (data: Record<string, any>) {
  return data.status === 1? message.success(data.success): message.error(data.message)
}
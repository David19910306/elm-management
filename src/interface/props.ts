import * as echarts from "echarts";
import Option from "./options";

type EChartsOptions = echarts.EChartsOption

export default interface IProps {
  options?: EChartsOptions,
  style?: Record<string, string>,
  record?: Record<string, any>,
  isModalVisible?: boolean,
  setModalVisible?: (visible: boolean) => void,
  myOptions?: Option[]
}

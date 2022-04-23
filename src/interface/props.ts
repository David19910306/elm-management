import * as echarts from "echarts";

type EChartsOptions = echarts.EChartsOption

export default interface IProps {
  options: EChartsOptions,
  style: Record<string, string>
}

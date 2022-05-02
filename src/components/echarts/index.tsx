import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {EChartsType} from "echarts";
import IProps from '@/interface/props'

export default function EchartsComponent(props: IProps) {
  const echartsRef = useRef(null)
  let myChart: EChartsType | null = null
  if (echartsRef.current) myChart = echarts.init(echartsRef.current)
  useEffect(() => {
    if (myChart) props.options && myChart.setOption(props.options)
  }, [props.options])

  return <div id="charts" className='echarts-section' ref={echartsRef} style={props.style}></div>
}

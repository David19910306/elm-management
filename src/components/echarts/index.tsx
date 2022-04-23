import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import IProps from '@/interface/props'

export default function EchartsComponent(props: IProps) {
  const echartsRef = useRef(null)

  useEffect(() => {
    if (echartsRef.current) {
      const myChart = echarts.init(echartsRef.current)
      props.options && myChart.setOption(props.options)
    }
  }, [])

  return <div className='echarts-section' ref={echartsRef} style={props.style}></div>
}

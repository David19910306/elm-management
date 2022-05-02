// 获取最近7天的日期
export function getLately7Days(): string[] {
  const days: string[] = []
  const date = new Date()
  for (let i = 0; i <= 24 * 6; i += 24) {
    const dateItem = new Date(date.getTime() - i * 60 * 60 * 1000)
    let year = dateItem.getFullYear() // 获取年
    let month = dateItem.getMonth() + 1 // 获取月份需要+1
    let day = dateItem.getDate() // 获取日期
    month = addDate0(month) //月份补0
    day = addDate0(day) // 日期单数补0
    let valueItem = year + '-' + month + '-' + day
    days.unshift(valueItem)
  }
  return days
}

function addDate0(time: number): number {
  if (time.toString().length === 1) {
    time = parseInt('0' + time.toString())
  }
  return time
}

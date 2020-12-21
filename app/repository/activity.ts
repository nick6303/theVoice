import useAgent from '@act/service-agent'

const endpoint = 'dbcn/dubaixmas2020'
const service = useAgent()

// 活動初始化
const init = () => {
  return service.get(`${endpoint}/init`)
}

export default {
  init
}

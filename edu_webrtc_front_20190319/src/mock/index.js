import Mock from 'mockjs'
import mockData from './mockData'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/getstatus/,'post', mockData.statusData)
Mock.mock(/\/getDetectionStatus/,'post',mockData.getDetectionStatus)

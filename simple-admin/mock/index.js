import Mock from 'mockjs'

Mock.mock('/api/login', 'post', option => {
  return option.body
})
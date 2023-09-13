import { createSlice } from '@reduxjs/toolkit'

const channel = createSlice({
  // 模块名唯一
  name: 'channel',

  // 初始数据
  initialState: {
    channelList: []
  },

  // 修改数据的同步方法
  reducers: {
    setChannelList (state, action) {
      state.channelList = action.payload
    }
  }
})

// 创建异步
const { setChannelList } = channel.actions
const fetchData = () => {
  return async (dispatch) => {
    fetch('http://geek.itheima.net/v1_0/channels').then(
      response => response.json()
    ).then(data => {
      dispatch(setChannelList(data.data.channels))
    })
  }
}


const channelReducer = channel.reducer

// 导出修改数据的函数
export { fetchData }

// 生成reducer 导出 供index.js做组合模块
export default channelReducer
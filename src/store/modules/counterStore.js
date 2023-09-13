import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  // 模块名唯一
  name: 'counter',

  // 初始数据
  initialState: {
    count: 1
  },

  // 修改数据的同步方法
  reducers: {
    add (state) {
      state.count++
    }
  }
})

const { add } = counter.actions

const counterReducer = counter.reducer

// 导出修改数据的函数
export { add }
// 导出reducer
export default counterReducer



// # 安装redux配套工具
// $ yarn add  @reduxjs/toolkit react-redux
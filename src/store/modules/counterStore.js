import { createSlice } from '@reduxjs/toolkit'

const counter1 = createSlice({
  // 模块名唯一
  name: 'counter',

  // 初始数据
  initialState: {
    count: 1,
    age: 25,
    taskList: ['react']
  },

  // 修改数据的同步方法
  reducers: {
    add (state) {
      state.count++
    },
    reduce (state) {
      state.count--
    },
    // action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
    addTaskList (state, action) {
      console.log(state, action)
      state.taskList.push(action.payload)
    }
  }
})

// 生成修改数据的方法导出
const { add, reduce, addTaskList } = counter1.actions

const counterReducer = counter1.reducer

// 导出修改数据的函数
export { add, reduce, addTaskList }

// 生成reducer 导出 供index.js做组合模块
export default counterReducer



// # 安装redux配套工具
// $ yarn add  @reduxjs/toolkit react-redux
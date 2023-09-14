import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add, reduce, addTaskList } from "./store/modules/counterStore"
import { fetchData } from "./store/modules/channelStore"

function App() {
  // 使用数据 state.xxx 的xxx 与store/index.js里面对应
  const { count, taskList } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)

  // 修改数据
  const dispatch = useDispatch()


  const clickAdd = () => {
    // 1. 生成action对象
    const action = add()
    // 2. 提交action进行数据更新
    dispatch(action)
  }
  const clickReduce = () => {
    // 1. 生成action对象
    const action = reduce()
    // 2. 提交action进行数据更新
    dispatch(action)
  }
  const pushTaskList = () => {
    const action = addTaskList('vue')
    dispatch(action)
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      { count }
      <div>
        <button onClick={clickAdd}>+</button>
        <button onClick={clickReduce}>-</button>
      </div>
      <div>
        <button onClick={pushTaskList}>push</button>
        {/* <button onClick={() => dispatch(addTaskList('vue'))}>push</button> */}
      </div>
      <div>
        {
          taskList.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </div>
      <div>异步数据获取：</div>
      <div>
        {
          channelList.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default App


// 组件使用store中的数据需要借助一个hook方法，叫做useSelector
// useSelector(state => state.模块名)
// 方法的返回值为一个对象，对象中包含store子模块中的所有数据


// 修改store中的数据有俩个核心步骤
// 1. 使用counterStore模块中导出的add方法创建action对象
// 2. 通过dispatch函数以action作为参数传入完成数据更新

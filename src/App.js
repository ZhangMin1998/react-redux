import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add, reduce, addTaskList } from "./store/modules/counterStore"
import { fetchData } from "./store/modules/channelStore"

function App() {
  // 使用数据
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

// 修改store中的数据有俩个核心步骤
// 1. 使用counterStore模块中导出的add方法创建action对象
// 2. 通过dispatch函数以action作为参数传入完成数据更新

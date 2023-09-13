import { useSelector, useDispatch } from "react-redux"
import { add, reduce } from "./store/modules/counterStore"

function App() {
  // 使用数据
  const { count } = useSelector(state => state.counter)

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

  return (
    <div className="App">
      { count }
      <button onClick={clickAdd}>+</button>
      <button onClick={clickReduce}>-</button>
    </div>
  )
}

export default App

// 修改store中的数据有俩个核心步骤
// 1. 使用counterStore模块中导出的add方法创建action对象
// 2. 通过dispatch函数以action作为参数传入完成数据更新

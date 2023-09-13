import { useSelector, useDispatch } from "react-redux"
import { add } from "./store/modules/counterStore"

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

  return (
    <div className="App">
      { count }
      <button onClick={clickAdd}>+</button>
    </div>
  )
}

export default App

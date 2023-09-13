import { useSelector } from "react-redux"

function App() {
  // 使用数据
  const { count } = useSelector(state => state.counter)

  const clickAdd = () => {
    
  }

  return (
    <div className="App">
      { count }
      <button onClick={clickAdd}>+</button>
    </div>
  )
}

export default App

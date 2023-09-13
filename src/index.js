import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 导入store
import store from './store'

// 导入store提供组件Provider
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 提供store数据
  <Provider store={store}>
    <App />
  </Provider>
)


// 要想让所有的组件都有资格访问store中的数据，需要我们在入口文件中，渲染根组件的位置通过Provider提供store数据

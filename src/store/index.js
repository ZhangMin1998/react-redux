import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./modules/counterStore"

export default configureStore({
  reducer: {
    // 注册子模块
    counter: counterReducer
  }
})
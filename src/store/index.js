import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./modules/counterStore"
import channelReducer from "./modules/channelStore"

export default configureStore({
  reducer: {
    // 注册子模块
    counter: counterReducer,
    channel: channelReducer
  }
})
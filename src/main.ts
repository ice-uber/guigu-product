import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import gloablComponent from '@/components/index'

const app = createApp(App)

app.use(gloablComponent)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(createPinia())
app.use(router)

import axios from '@/utils/request'

axios({
  url: '/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '1111112',
  },
})

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 直接链式调用use和mount方法
// createApp(App).use(router).mount('#app')

// 创建Vue应用实例
const app = createApp(App)
// 使用路由插件
app.use(router)
// 使用vant插件
app.use(Vant)
// 挂载应用到DOM元素id为'app'的节点上
app.mount('#app')

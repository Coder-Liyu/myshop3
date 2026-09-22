/**
 * 导入Vue Router相关功能
 * createRouter: 创建路由实例
 * createWebHashHistory: 创建基于哈希模式的路由历史记录
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入首页组件
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHashHistory(), // 使用哈希模式，URL中会有#号
  routes: [
    {
      path: '/', // 根路径
      redirect: '/home' // 重定向到首页
    },
    {
      path: '/home', // 首页路径
      name: 'home', // 路由名称
      component: Home, // 直接导入首页组件
      meta: {
        title: '首页' // 路由元信息，用于设置页面标题
      }
    },
    {
      path: '/category', 
      name: 'category', 
      component: () => import('../pages/Category.vue'), // 懒加载分类页面组件
      meta: {
        title: '分类', 
        isShowNav: true, // 显示导航栏
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../pages/Message.vue'),
      meta: {
        title: '消息',
        isShowNav: true,
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../pages/Cart.vue'),
      meta: {
        title: '购物车',
        isShowNav: true,
        isShowBack: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/User.vue'),
      meta: {
        title: '我的'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title //  获取路由元信息中的标题
  if(title){ //  如果标题存在，则将其与"微商城"组合后设置为页面标题
    document.title = title + ' - 微商城'
  }  
  next() //  继续执行路由导航
})

export default router
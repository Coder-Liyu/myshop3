<template>
  <router-view />
  <!-- 底部导航：route开启路由模式，fixed固定底部，active-color选中颜色 -->
  <van-tabbar route fixed active-color="#FF8000">
    <van-tabbar-item :to="{ name: 'home' }" icon="wap-home-o">首页 </van-tabbar-item>
    <van-tabbar-item :to="{ name: 'category' }" icon="apps-o">分类 </van-tabbar-item>
    <van-tabbar-item :to="{ name: 'message' }" icon="chat-o">消息 </van-tabbar-item>
    <van-tabbar-item :to="{ name: 'cart' }" icon="shopping-cart-o">购物车 </van-tabbar-item>
    <van-tabbar-item :to="{ name: 'user' }" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
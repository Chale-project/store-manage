<template>
  <div class="error404">
    <div class="error404-body-con">
      <div class="error404-body-con-title">4
        <span><van-icon name="close" /></span>4
      </div>
      <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
      <div class="error404-btn-con">
        <van-button @click="goHome" size="large" type="primary" plain>主要按钮</van-button>
        <van-button @click="backPage" size="large" type="warning" plain>警告按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card, Button, Icon } from "vant";
Vue.use(Card)
  .use(Button)
  .use(Icon);
export default {
  mounted() {
    console.log(this.$router)
  },
  methods: {
    
    backPage() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style lang="less">
@import "./404.less";
.color1{
  color: black
}
.error404-btn-con{
  .color1
}
</style>

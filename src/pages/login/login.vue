
<template>
  <div class="page login">
    <div class="login-form">
      <van-cell-group>
        <van-field v-model.lazy="username" required clearable label="用户名" icon="question" placeholder="请输入用户名" @click-icon="$toast(question)" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <div class="login-but">
      <van-button type="primary" size="large">登录{{username}}</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CellGroup, Field, Toast } from "vant";
import { getAuth, getUserUnionid, getSmsVerify } from "@/util/getData";
Vue.use(CellGroup).use(Field);
export default {
  data() {
    return {
      username: "",
      password: "",
      code: null,
      question: "的顾客目的是！"
    };
  },
  mounted() {
    let that = this;
    that
      .a()
      .then(that.b)
      .then(that.c)
      .then(res => {
        console.log(res);
      });
  },
  methods: {
    a() {
      return getAuth();
    },

    b() {
      return getUserUnionid();
    },

    c() {
      return getSmsVerify();
    }
  }
};
</script>

<style lang="less">
@import "../../style/mixin";
.login-form,
.login-but {
  padding-top: 10px;
  .van-button--primary {
    background-color: #ff0;
    .sc(14px,#ff0000);
  }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{

    }
  },
  props: [] / {},
  computed: {},
  watch: {},
  methods: {},
  directives: {},
  filters: {},
  components: {},
  beforeCreate() {
    console.log('beforeCreate',0)
  },
  created() {
    console.log('created',1)

  },
  beforeMount() {
    console.log('beforeMount',2)

  },
  mounted() {
    console.log('mounted',3)

  },
  beforeUpdate() {
    console.log('beforeUpdate',4)

  },
  updated() {
    console.log('updated',5)

  },
  activated() {
    console.log('activated',6)

  },
  deactivated() {
    console.log('deactivated',7)

  },
  beforeDestroy() {
    console.log('beforeDestroy',8)

  },
  destroyed() {
    console.log('destroyed',9)

  }
};
</script>

<style lang="less">
  @import "./style/common";
</style>

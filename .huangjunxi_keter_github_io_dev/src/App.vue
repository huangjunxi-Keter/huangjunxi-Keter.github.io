<template><router-view></router-view></template>

<script>
import bus from './mitt/event'
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();

    //#region  路由跳转（全局可调用）
    let go = (routeName) => {
      router.push(routeName)
    };
    bus.on('go', go);
    //#endregion
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

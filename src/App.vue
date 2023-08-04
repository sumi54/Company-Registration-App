<template>
<div class="container " >
  <Menu></Menu>
  <RouterView />

</div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import hello from './views/hello.vue'
export default{
  components:{
    Menu,
    hello
  }
}
</script>
<style>
body{
  background-color: rgb(241, 245, 248);
}
/* #app{
  display: flex !important;
  top: 0 !important;
  margin: 0 !important;
} */


</style>

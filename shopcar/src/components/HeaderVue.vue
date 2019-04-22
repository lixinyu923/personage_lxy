<template>
  <div class="header">
      <p>购物车</p>
      <p>编辑</p>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
.header{
  width:100%;
  height:44px;
  background:#008eee;
  color:#fff;
  display:flex; 
  text-align:center;
  line-height:44px;
  p:nth-child(1){
    font-size:20px;
    flex:1;
  }
  p:nth-child(2){
    width:80px;
    font-size:16px;
  }
}
</style>

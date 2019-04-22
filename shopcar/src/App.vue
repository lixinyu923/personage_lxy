<template>
  <div class="box">
    <HeaderVue></HeaderVue>
    <CenterVue></CenterVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "./components/HeaderVue";
import FooterVue from "./components/FooterVue";
import CenterVue from "./components/CenterVue"
export default {
    components:{
      HeaderVue,
      FooterVue,
      CenterVue
    }
}
</script>

<style scoped lang='scss'>
    html,body{
      width:100%;
      height:100%;
    }
    .box{
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
    }
</style>  

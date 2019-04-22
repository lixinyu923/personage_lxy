<template>
  <div id="shopcar">
    <HeaderVue></HeaderVue>
    <ListVue class="one"/>
    <FooterVue/>
  </div>
</template>

<script>
import HeaderVue from "@/components/HeaderVue";
import ListVue from "@/components/ListVue";
export default {
  components: { HeaderVue, ListVue },
  data(){
    return{
      data:null
    }
  }
};
</script>

<style scoped lang="less">
#shopcar {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>

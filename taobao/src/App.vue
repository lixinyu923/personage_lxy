<template>
  <div id="box">
    <div class="top">筛选</div>
    <div class="btns">
      <p>综合</p>
      <p  @click="sortxlFn">销量 <i :class="[flag2?'red':'green']"></i></p>
      <p @click="sortFn">
        价格
        <i :class="[flag?'red':'green']"></i>
      </p>
      <p>店铺</p>
    </div>
    <div class="container">
       <ItemCom v-for="item in dataList" :key="item.id" :options="item"></ItemCom>
    </div>
  </div>
</template>

<script>
import ItemCom from "./components/HelloWorld.vue";
import dataList from "./data/data.json"
export default {
  data(){
    return {
      dataList:dataList.list,
      flag:false,
      flag2:false
    }
  },
  components:{
    ItemCom
  },
  methods:{
    sortFn(){
      let vm=this;
      vm.flag=!vm.flag;
      vm.dataList.sort((a,b)=>{
        if(vm.flag){
          return a.price-b.price
        }else{
          return b.price-a.price
        }
      })
    },
    sortxlFn(){
  let vm=this;
      vm.flag2=!vm.flag2;
      vm.dataList.sort((a,b)=>{
        if(vm.flag2){
          return a.xl-b.xl
        }else{
          return b.xl-a.xl
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration:none;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#box{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  .top{
    width:100%;
    height:40px;
    background:orange;
  }
  .btns{
    width:100%;
    height:50px;
    display:flex;
    p{
      flex:1;
      text-align:center;
      line-height:50px;
      .green{
        display:inline-block;
        width:10px;
        height:10px;
        background:green;
      }
      .red{
        display:inline-block;
        width:10px;
        height:10px;
        background:red;
      }
    }
  }
  .container{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
  }
  
}
</style>

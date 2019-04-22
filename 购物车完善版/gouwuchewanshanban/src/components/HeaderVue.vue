<template>
    <header @click="get"> 
        <button>触发</button>
    </header>
</template>

<script>
export default {
 data(){
     return{
         totalCount:10
     }
 },
  created(){
     console.log('headercreated')
 },
 mounted(){
     console.log('headermounted')
    //  this.$bus.$on('getFunEvent',(data)=>{console.log(data)})
 },
 methods:{
     get(){
         this.$bus.$emit("getFunEvent",this.totalCount)
     }
 }
}
</script>

<style scoped lang="less">
header{
    height: 40px;
    width: 100%;
    background: pink
}
</style>

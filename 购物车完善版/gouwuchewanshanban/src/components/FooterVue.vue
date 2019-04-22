<template>
    <footer>
        <ul>
            <li v-for="(item,index) in footerList" :key="index">
                <span :class="['iconfont', item.icon]"></span>
                <p>{{item.txt}}</p>
            </li>
        </ul>
    </footer>
</template>

<script>

export default {
 data(){
     return{
         footerList:[
             {icon:'icon-shouye',txt:"首页"},
             {icon:'icon-shoucang',txt:"购物车"},
             {icon:'icon-faxian',txt:"发现"},
             {icon:'icon-weidenglu',txt:"我的"}
         ]
     }
 },
 created(){
     console.log('footercreated')
    //   this.$bus.$on('getFunEvent',(data)=>{console.log(data)})
 },
 mounted(){
     console.log('footermounted')
     this.$bus.$on('getFunEvent',(data)=>{console.log(data)})
 }
}
</script>

<style scoped lang="less">
footer{
   height: 50px;
   width: 100%;
   background: #008EEE;
   ul{
       list-style: none;
       display: flex;
       margin: 0;padding: 0;
       justify-content: space-around;
       align-items: center;
    height: 100%;
       li{
           flex: 1;
           text-align: center;
           color: #fff;
        p{
            font-size:12px;
        }
       }
   }
}
</style>

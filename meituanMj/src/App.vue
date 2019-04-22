<template>
  <div id="app">
  <header>
     <p>菜单</p>
     <p>评论</p>
     <p>商家</p>
  </header>
   <div class="content">
       <div class="left">
           <ul>
               <li v-for="(item,index) in data" :key="index" :class="{'active':index==ind}" @click="change(index,item.type)">{{item.title}}</li>
           </ul>
       </div>
       <div class="right">
       <my-list v-for="(item,index) in list" :key="index" :title="item.title" :img="item.img"
          :price="item.price"
          :id="item.id"
          :num="item.num"
          :type="item.type"
></my-list>
       </div>
    </div>  
   <footer>
       <my-dialog v-show="isShow" :buyList="buyList">
           
           
           </my-dialog>    
       <div @click="showDialog">
             <div>总数:{{totalCount}} 总价:{{totalPrice}}</div>
       <div>去结算</div>
       </div>
   </footer>
  </div>
</template>

<script>
import myList from './components/list'
import myDialog from './components/dialog'
import axios from 'axios'
export default {
    name: "App",
    data() {
        return {
           data:[],
           list:[],
           datalist:[],
           buyList:[],
           ind:0,
           isShow:false
        }
    },
    computed:{
        totalPrice(){
            return this.buyList.reduce((prev,cur)=>prev+cur.num*cur.price,0)
        },
        totalCount(){
            return this.buyList.reduce((prev,cur)=>prev+cur.num,0)
        }
    },
    components: {
      myList,
      myDialog
    },
    methods:{
     getList(list,type){  //筛选数据
         return list.filter(item=>item.type==type)
     },
     change(ind,type){  //切换
         this.ind=ind;
         this.list=this.getList(this.datalist,type)
     },
     showDialog(){
        this.isShow=!this.isShow;
     }
    },
    created(){
        axios.get('/menu').then((res)=>{
            console.log(res)
            this.data=res.data
        })
         axios.get('/list').then((res)=>{
            console.log(res)
            this.datalist=res.data;
            this.list=this.getList(res.data,this.data[0].type);
            this.$bus.$on('addCount',(num,id)=>{
                let index=this.datalist.findIndex(item=>item.id==id)
                this.datalist[index].num=num;
                let ind=this.buyList.findIndex(item=>item.id==id);
                if(ind==-1){
                    this.buyList.push(this.datalist[index])
                }
                // let cur=this.data.findIndex(item=>item.type==type)
                // this.ind=cur
            })
         
      });
    },
    mounted() {
        
    }
};
</script>

<style lang="" >
*{
    padding: 0;
    margin: 0;
    list-style:none;
    text-decoration: none;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
}
#app{
     width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
}
header{
    width: 100%;
    height: 44px;
    display: flex;
    background:#fff0cf;
    justify-content: space-around;
    align-items: center;
}
header p{
    color: black;
    font-size: 18px;
}
.content{
    flex: 1;
    width: 100%;
    overflow-y: auto;
     display: flex;
}
.content .left{
    width: 120px;
    height: 100%;
    border-right: 1px solid #ccc;
}
.content .left li{
    height: 120px;
    line-height:120px;
    text-align: center; 
    font-size: 20px;
}
.content .left li.active{
    color:red;
}
.content .right{
     flex: 1;
      height: 100%;
}
footer{
    width: 100%;
    height: 49px;
    display: flex;
    border-top: 1px solid #ccc;
      justify-content: space-around;
   align-items: center;
}
footer div:nth-child(2){
    color: black;
    font-size: 20px;
    width: 70%;
    height: 100%;
    line-height: 49px;
}
footer div:nth-child(3){
    color: black;
    font-size: 20px;
    text-align: center;
}
footer div:nth-child(4){
      font-size: 30px;
}
</style>




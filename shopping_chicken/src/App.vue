<template>
  <div id="app">
    <div class="body">
        <div class="left">
          <ul>
            <li v-for="(item,index) in list" :key="index" @click="fn(item.id)">{{item.namer}}</li>
          </ul>
          
        </div>
        <div class="right">
          <el-pro v-for="(Item,index) in proList" :key="index" :item="Item"></el-pro>
        
        </div>
    </div>
    <footer @click="status=true">
      <span>数量{{totalNum}}总价{{totalPrice}}</span>
      <el-dialog :buyList="buyList" v-show="status"
        @clear="clear"
        @close="status=false"
      ></el-dialog>
    </footer>
  </div>
</template>

<script>
import elPro from "./components/el-pro"
import elDialog from "./components/dia-log"
 
export default {

  name: 'App',
  data(){
    return {
      status:false,
      list:[],
      proList:[],
      type:1,
      buyList:JSON.parse(localStorage.getItem("buyList"))||[]
    }
  },
  components: {
    elPro,
    elDialog
  },
  created(){
    this.$http.get("/classify").then((res)=>{
      if(res.data.code==1){
        this.list=res.data.msg;
        this.type=res.data.msg[0].id;
        return this.$http.get("/pro",{params:{type:this.type}})

      }
    }).then((con)=>{
      if(con.data.code==1){
          this.buyList=JSON.parse(localStorage.getItem("buyList"))||[]
          this.proList=con.data.msg.map(item=>{
            item.num=0;
            this.buyList.forEach(result=>{
              if(result.id==item.id){
                item.num=result.num
              }
            })
            return item;
          })
      }
      console.log(this.proList)
    }).catch((error)=>{
      console.log(error)
    })
  this.$bus.$on('buy',(num,id)=>{
    let index=this.proList.findIndex((item)=>{
      return item.id==id
    })
    if(index != -1){
      this.proList[index].num=num;
    }
    
    let isHas=this.buyList.findIndex(item=>item.id==id)
    if(isHas==-1){
      this.buyList.push(this.proList[index])
    }
    else{
      this.buyList[isHas].num=num
    }
    localStorage.setItem("buyList",JSON.stringify(this.buyList))
  })
  },
  computed:{
    totalNum(){
      return this.buyList.reduce((pre,cur)=>{
        return pre+cur.num
      },0)
    },
     totalPrice(){
      return this.buyList.reduce((pre,cur)=>{
        return pre+(cur.num*cur.price)
      },0)
    }
  },
  methods:{
    fn(id){
      this.ajax(id)
    },
    ajax(id){
      this.$http.get("/pro",{params:{type:id}}).then((con)=>{
        if(con.data.code==1){
          this.buyList=JSON.parse(localStorage.getItem("buyList"))||[]
          this.proList=con.data.msg.map(item=>{
            item.num=0;
            this.buyList.forEach(result=>{
              if(result.id==item.id){
                item.num=result.num
              }
            })
            return item;
          })
        }
      }).catch((error)=>{
        console.log(error)
      })
    },
    clear(){
      this.buyList.splice(0)
      localStorage.clear()
    }
  }
  
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  list-style:none
}
html,body{
  width:100%;
  height:100%;
  overflow: hidden;
}
#app{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  .body{
    flex:1;
    background-color: white;
    display: flex;
    width: 100%;

    .left{
      width:30%;
      height:100%;
      background-color: greenyellow;
      ul{
        width:100%;
        height:100%;
        li{
          width:100%;
          height:50px;
          line-height: 50px;
          text-align: center;
          &:hover{
            color: pink;
            background-color: white;
          }
        }
      }
    }
    .right{
      flex:1;
      width: 100%;
      height:100%;
    }
  }
  footer{
    width:100%;
    height:80px;
    background-color: pink;
  }
}
</style>

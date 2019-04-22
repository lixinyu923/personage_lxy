<template>
   

        <div class="container">
            <ItemVue v-for="item in dataList" :key="item.id" :options="item" @changeItemAllEvent="changeCheckboxAll"></ItemVue>
            <div class="countAll">
                <label>
                    <input type="checkbox" v-model="isCheckAll" @change="changeAllcheckbox">全选
                </label>
                <div class="allMany">
                    <p>合计:{{totalPrice | priceFormater}}</p>
                    <p>数量:{{totalCount}}</p>
                </div>
                <div class="go">去结算</div>
            </div>
        </div>

</template>

<script>

import ItemVue from "./ItemVue";

import dataList from "@/data/data.json";

export default {
    components:{
        ItemVue
    },
    data(){
      return {
            dataList:dataList.list,
            isCheckAll:false
      }
    },
    computed:{
        totalPrice:function(){
            return this.dataList.reduce((total,current)=>{
                if(current.ischecked){
                    total=total+current.price*current.count;
                }
                return total;
            },0)
        },
        totalCount:function(){
            return this.dataList.reduce((total,current)=>{
                if(current.ischecked){
                    total=total+current.count;
                }
                return total;
            },0)
        }
    },
    methods:{
        changeCheckboxAll(){
            this.isCheckAll=this.dataList.every(item=>item.ischecked);
        },
        changeAllcheckbox(){
            this.dataList.forEach((item)=>{
                item.ischecked=this.isCheckAll;
            })
        }
    }
   
   
}
</script>

<style scoped lang="scss">
    .container{
        width:100%;
        flex:1;
        overflow:auto;
    }
    .countAll{
        width:100%;
        height:70px;
        background:rgba(0,0,0,0.8);
        position: fixed;
        bottom:70px;
        left:0;
        color:#fff;
        display:flex;
        font-size:18px;
        text-align:center;
        label{
            width:80px;
            height:100%;
            line-height:70px;
            
            >input{
                width:20px;
                height:20px;
                margin-right:5px;
                margin-top:10px;
            }
        }
        .allMany{
            flex:1;
            padding:10px 0;
            box-sizing:border-box;
        }
        .go{
            width:90px;
            height:100%;
            background:#008eee;
            line-height:70px;
        }
    }
</style>

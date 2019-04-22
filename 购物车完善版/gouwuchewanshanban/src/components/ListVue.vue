<template>
    <div class="listcon">
        <!-- {{dataJson}} -->
        <ItemVue v-for="item in dataJson" :key="item.id" :options="item" @isCheckedAllEvent="checkItemFun"/>
        <p class="total">
            <span>总价：{{totalPrice | priceFormater}}</span>
            <span>个数：{{totalCount}}</span>
            <label><input type="checkbox" v-model="isCheckAll" @change="changeAllFun"> 全选</label>
        </p>
    </div>
</template>

<script>
import ItemVue from '@/components/ItemVue'
//引入数据
import dataJson from '@/data/data.json'
export default {
    data(){
        return{
            dataJson:dataJson.list,
            msg:'1612A',
            isCheckAll:false//是否全选
        }
    },
components:{ItemVue},
computed:{
    /**
     * 有一个条件，选中的才进行加
     */
    totalPrice:function(){
        return this.dataJson.reduce((total,current)=>{
            // 判断是否被选中
            if(current.ischecked){
             total=  total+current.price*current.count
            }
            return total
        },0)
    },
    totalCount(){
        return this.dataJson.reduce((total,current)=>{
            // 判断是否被选中
            if(current.ischecked){
             total=  total+current.count
            }
            return total
        },0)
    }
},
methods:{
    /**
     * 点击全选按钮
     */
    changeAllFun(){
       console.log(this.isCheckAll)
        this.dataJson.forEach((item)=>{
            item.ischecked= this.isCheckAll
        })
    },
    /**
     * 判断数据的每一个ischecked属性是否为true
     * 数组的every方法
     */
    checkItemFun(){
      this.isCheckAll=  this.dataJson.every(item=>item.ischecked)
    }
}
}
</script>

<style scoped lang="less">
.listcon{
    flex: 1;
    overflow-y: auto
}
.total{
    position: fixed;
    bottom: 55px;
    background: rgba(0,0,0,.8);
    color: #fff;
    padding: 20px 0;
    width: 100%;
}
</style>

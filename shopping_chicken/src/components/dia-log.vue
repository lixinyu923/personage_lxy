<template>
    <div class="dialog" @click.stop="$emit('close')">
       <div class="dialog-con">
            <h4 @click.stop="$emit('clear')">清空购物车</h4>
        <ul v-if="buyList.length">
            <li v-for="item in buyList" :key="item.id">
                <span>{{item.namer}}</span>
                <span>{{item.price}}</span>
                <el-count :num="item.num" :id="item.id"></el-count>
            </li>
        </ul>
        <span v-else>购物车空</span>
       </div>
    </div>
</template>
<script>
import elCount from "./el-count"
export default {
    components:{
        elCount
    },
    props:['buyList']
}
</script>
<style lang="scss">
    .dialog{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background-color: rgba(0,0,0, 0.7)
    }.dialog-con{
        width:100%;
        background-color:white;
        position: absolute;
        bottom:0;
        left:0
    }
    li{
        border-bottom:1px solid black;
        display: flex;
    }
</style>

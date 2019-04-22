<template>
        <div>
            <div class="con">
               <div class="Left">
                    <img src="../assets/logo.png" alt="">  
               </div>
               <div class="Right">
                <h3>{{item.namer}}</h3>
                <span>{{item.price}}</span>
                <el-count :num="item.num" :id="item.id"></el-count>
               </div>
             </div>
        </div>
</template>
<script>
import elCount from "./el-count"
export default {
        props:['item'],
        components:{
            elCount
        }
}
</script>
<style lang="scss">
    .con{
        width:100%;
        height:100px;
        display:flex;
        padding:10px;
        box-sizing: border-box;
        flex-direction: row;
        border-bottom:1px solid black;
        .Left{
            width:50%;
            height:100%;
            img{
               width:100px;
               height:100px;
            }
        }
        .Right{
            flex:1
        }
    }
</style>

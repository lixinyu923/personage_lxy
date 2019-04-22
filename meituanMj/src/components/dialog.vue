<template>
    <div class="dialog">
        <div class="dialogContent">
            <ul>
                <li v-for="(item,index) in buyList" :key="index">
                    <span>商品名:{{item.title}}</span>
                    <span>商品价格:{{item.price}}</span>
                    <my-count :num="item.num" :id="item.id" :type="item.type"></my-count>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import myCount from './count'
export default {
    props:{
        buyList:Array
    },
    components:{
        myCount
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.dialog{
    width: 100%;
    height: 93%;
    position: absolute;
    left: 0;
    bottom: 50px;
    background: rgba(0,0,0,0.3);
}
.dialogContent{
     width: 100%;
    height: 200px;
    background: #fff0cf;
      position: absolute;
    left: 0;
    bottom: 0;
    overflow-y: auto;
}

</style>
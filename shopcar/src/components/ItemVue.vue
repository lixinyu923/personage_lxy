<template>
    <div class="listCont">
        <input type="checkbox" class="checkone" v-model="options.ischecked" @change="changeItemAll">
        <img :src="'static/images/'+options.img" alt="">
        <div class="titleItem">
            <span class="title">
                {{options.desc}}
            </span>
            <div class="btm">
                <p class="price">￥{{options.price}}</p>
                <div class="countInp">
                    <button @click="reduceFn">-</button>
                    <input type="text" v-model="options.count">
                    <button @click="addFn">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['options'],
    methods:{
        //数量+
        addFn(){
            this.options.count++;
        },
        //数量-
        reduceFn(){
            if(this.options.count>1){
                this.options.count--;
            }
        },
        //选中切换改变全选按钮
        changeItemAll(){
            this.$emit("changeItemAllEvent");
        }

    }
}
</script>

<style scoped lang="scss">
    .listCont{
        width:100%;
        height:160px;
        border-bottom:1px solid #ccc;
        display:flex;
        overflow:hidden;
        >.checkone{
            width:20px;
            height:20px;
            margin-top:80px;
        }
        >img{
            width:140px;
            height:130px;
            margin:10px;

        }
        .titleItem{
            flex:1;
            display:flex;
            flex-direction:column;
            padding:10px 0;
            box-sizing:border-box;
            .price{
                width:100%;
                color:red;
            }
            .countInp{
                width:100%;
                flex:1;
                margin:10px 0;
                display:flex;
                >input{
                    width:50px;
                    height:30px;
                    font-size:18px;
                }
                >button{
                    width:30px;
                    height:34px;
                }
            }
        }
    }
</style>

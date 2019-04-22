<template>
    <div class="sum">
   <div v-if="num">
        <span @click="del">-</span>
    <span>{{num}}</span>
   </div>
    <span @click="add">+</span>
    </div>
</template>
<script>
export default {
    props:{
        num:Number,
        id:Number,
        type:String
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        add(){
            let num=this.num+1
            this.$bus.$emit('addCount',num,this.id)
        },
        del(){
             let num=this.num-1
             this.$bus.$emit('addCount',num,this.id)
        }

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.sum{
    display: flex;
    margin-left: 80px;
    margin-top: 10px;
}
.sum span:nth-child(1){
    color: grey;
    font-size: 22px;
    margin-right: 10px;
}
.sum span:nth-child(2){
    color: blue;
    font-size: 22px;
      margin-right: 10px;
}
.sum span:nth-child(3){
    color: black;
    font-size: 22px;
}
</style>
<template>
    <div>
        <span v-show="num>0" @click.stop="buy('-')">-</span>
        <span v-show="num>0">{{num}}</span>
        <span @click.stop="buy('+')">+</span>
    </div>
</template>
<script>
export default {
    props:['num','id'],
    methods:{
        buy(str){
            let num=str=='-'?this.num-1:this.num+1;
            this.$bus.$emit('buy',num,this.id)
        }
    }
}
</script>
<style>
 
</style>

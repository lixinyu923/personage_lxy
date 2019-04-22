<template>
  <dl>
      <dt><img :src="img" alt=""></dt>
      <dd>
          <p>{{title}}</p>
          <span>{{price}}</span>  
          <my-count :num="num" :id="id" :type="type"></my-count>
      </dd>
  </dl>
</template>
<script>
import myCount from './count'
export default {
    props:{
       title: String,
    img: String,
    price: Number,
    id: Number,
    num: Number,
    type: String

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
dl{
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
}
dl dt img{
    width:105px; 
    height: 105px;
}
dl dd p{
    color: black;
    font-size: 25px;
    font-weight: 600;
}
dl dd span{
    color: red;
    font-size: 20px;
    margin-left: 20px;
}
</style>
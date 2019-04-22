<template>
  <dl>
    <dt>
      <input type="checkbox" v-model="options.ischecked" @change="changeItemFun">
    </dt>
    <dd class="d1">
      <img :src="'static/images/'+options.img" alt>
    </dd>
    <dd class="d2">
      <p>{{options.title}}</p>
      <p>{{options.desc}}</p>
      <p class="price">{{options.price | priceFormater}}</p>
      <p class="btn">
        <button @click="addFun">+</button>
        <input type="text" v-model="options.count">
        <button @click="reduceFun">-</button>
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  // props:['options']
  data(){
    return{}
  },
  props:{
    msg:String,
    options:{
      type:Object,
      required:true,
      // default:()=>{
      //   return {}
      // }
    },
    count:{
      type:Number,
      default:100
    }
  },
  filters:{
    'priceFormater':(val)=>{
      if(typeof val !=='number'){
        return '数据无效'
      }
      return "￥"+val.toFixed(2)
    }
  },
  methods:{
    /**
     * 加法
     */
    addFun(){
      // console.log(this.options)
      this.options.count++
    },
    /**
     * 减法
     */
    reduceFun(){
      if(this.options.count>1){
        this.options.count--
      }
    },
    /**
     * 点击单个数据的checkbox,
     * 判断数据的每一个ischecked属性是否为true
     * 数组的every方法
     */
    changeItemFun(){
      this.$emit('isCheckedAllEvent')
    }
  }
};
</script>

<style scoped lang="less">
dl {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 5px;
  dt {
    width: 20px;
  }
  .d1 {
    img {
      width: 100%;
    }
    flex: 2;
    margin: 0 5px;
  }
  .d2 {
    flex: 3;
    .price{color: red}
    .btn {
        display: flex;
    flex-direction: row-reverse;
      input{
        width: 30%;
      }
    }
  }
}
</style>

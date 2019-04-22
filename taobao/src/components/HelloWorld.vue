<template>
  <div class="center">
    <dl>
      <dt>
        <img :src="'static/images/'+options.img" alt>
      </dt>
      <dd>
        <p>{{options.title}}</p>
        <b>
          {{options.xl}}
        </b>
        <p class="price">￥{{options.price | priceFormater}}</p>
      </dd>
    </dl>

  </div>
</template>

<script>
export default {
  props: ["options"],
  filters:{
    "priceFormater":(value)=>{
      if(typeof value!=="number"){
        return "无效数据"
      }
      return '￥'+value.toFixed(2)
    }
  }
};
</script>

<style scoped lang="scss">
.center {
  
    width: 48%;
  dl {
  
    height: 350px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin: 3px;
    dt {
      img {
        width: 100%;
      }
    }
    dd {
      font-size: 14px;
      .price {
        color: red;
        font-size: 18px;
        font-weight: 900;
      }
    }
  }
}
</style>

<template>
    <div class="footer">
        <dl>
            <dt><i class="iconfont icon-shouye"></i></dt>
            <dd>首页</dd>
        </dl>
         <dl>
             <dt><i class="iconfont icon-gouwuche-xuanzhong"></i></dt>
            <dd>购物车</dd>
        </dl>
         <dl>
           <dt><i class="iconfont icon-fenlei-xuanzhong"></i></dt>
            <dd>分类</dd>
        </dl>
         <dl>
            <dt><i class="iconfont  icon-user"></i></dt>
            <dd>个人</dd>
        </dl>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .footer{
        width:100%;
        height:60px;
        background:#008eee;
        color:#fff;
        font-size:16px;
        display:flex;
        padding:3px 10px;
        box-sizing:border-box;
        dl{
            text-align:center;
            flex:1;
            dt{
                font-size:26px;
            }
        }
    }
</style>

<template>
   <div id="detail">
     <header>
       <img @click="back()" src="../assets/img/back.png" width="7" height="15" alt="">
       <h2>客户详情</h2>
     </header>
     <section>
       <div class="header-bar">
         <div>客户信息</div>
         <div>亿立五金建材家具城A701</div>
       </div>
       <ul id="info">
         <li><span>张三</span><span>139****1234</span></li>
         <li><span>张三</span><span>139****1234</span></li>
       </ul>
       <div class="header-bar">
         <div>
           <span>业务进度：</span><span>发佣（已发佣）</span>
         </div>
         <div><span>查看更多</span><img src="../assets/img/right.png" width="6" height="10" alt=""></div>
       </div>
       <ul id="progress">
         <li><span>原始佣金：</span><span>1200000元</span></li>
         <li><span>折佣：</span><span>1200000元</span></li>
         <li><span>佣金奖励：</span><span>1200000元</span></li>
         <li><span>提供发票：</span><span>是</span></li>
         <li><span>应发佣金：</span><span>1200000元</span></li>
         <li><span>实发佣金：</span><span>1200000元</span></li>
         <li><span>出款凭证</span><img src="../assets/img/print.png" width="96" alt=""></li>
       </ul>
     </section>
   </div>
</template>

<script>
    export default {
        name: "detail",
      data(){
          return{

          }
      },
      methods:{
          back(){
            history.back();
          }
      }
    }
</script>

<style scoped>
  header{
    height: .44rem;
    display: flex;
    align-items: center;
    padding-left: .1rem;
  }
  header>h2{
    flex: 1;
  }
  section{
    background: #eee;
    padding: 0 .15rem .5rem .15rem;
  }
  section .header-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .45rem;
  }
  #info{
    background: #FFFFFF;
    border-radius: .04rem;
    height: 1.28rem;
    margin-bottom: .25rem;
    text-align: left;
    padding: .1rem .15rem;
  }
  #info li{
    margin-bottom: .15rem;
  }
  #info span{
    margin-right: .15rem;
  }
  #progress{
    background: #FFFFFF;
    border-radius: 4px;
    height: 3.25rem;
    text-align: left;
    padding: .15rem;
  }
  #progress li{
    margin-bottom: .15rem;
  }
  #progress li>span:first-child{
    width: .8rem;
    display: inline-block;
  }
</style>

<template>
  <div>
    <header>
      <div id="search">
        <img src="../assets/img/search.png" alt=""/>
        <input type="text" placeholder="项目名称／客户姓名／号码后4位"/>
      </div>
      <div id="total">
        <div><span>今日报备:</span><span></span>12组</div>
        <div><span>全部：</span><span>123</span></div>
      </div>
    </header>
    <section>
      <div id="type">
        <ul>
          <li>未带看</li>
          <li>90</li>
        </ul>
        <ul>
          <li>未成交</li>
          <li>20</li>
        </ul>
        <ul>
          <li>未发佣</li>
          <li>9</li>
        </ul>
        <ul>
          <li>已发佣</li>
          <li>4</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
//  import kflHeader from '@/components/Header'
export default {
      name: 'yhfHeader'
//    components: {
//      'myHeader': kflHeader,
//      'myFooter': kflFooter
//    },
//    data() {
//    return {
//      order: {},
//      result: null
//    }
//  },
//  methods: {
//    jump: function () {
//      this.$parent.jump('/detail');
//    },
//    submitOrder: function () {
//      console.log(this.order);
//      this.$http.jsonp('http://'+serverUrl+'/data/order_add.php', { params: this.order }).then(function (response) {
//        console.log(response.data);
//        if (response.data) {
//          if (response.data[0].msg == 'succ') {
//            this.result = "下单成功，订单编号为:" + response.data[0].oid;
//            localStorage.setItem('phone', this.order.phone);
//          }
//          else {
//            this.result = "下单失败";
//          }
//          console.log('result is ' + this.result);
//
//        }
//      })
//    }
//  }
//  ,
//  created() {
//    console.log(this.$route.params.id);
//    this.order = { did: this.$route.params.id };
//
//  }
}
</script>

<style>
  header{
    min-height: .8rem;
    box-sizing: border-box;
    padding: .07rem .15rem .15rem .15rem;
    font-size: 14px;
  }
  #search{
    display: flex;
    align-items: center;
  }
  #search img{
    width: .2rem;
    height: .2rem;
    margin-right: .13rem;
  }
  #search input{
    background: #F7F7F7;
    border-radius: 15px;
    width: 3.1rem;
    height: .3rem;
    padding-left: .14rem;
    border-width: 0;
  }
  #total{
    display: flex;
    justify-content: space-between;
    margin-top: .15rem;
  }
  section{
    padding: .15rem;
    background: #ddd;
  }
  #type{
    display: flex;
    justify-content: space-around;
  }
  #type ul{
    opacity: 0.8;
    background-image: linear-gradient(45deg, #2AD7C8 0%, #38C9A3 100%);
    border-radius: .04rem;
    width: .76rem;
    height: .6rem;
    color:#fff;
    padding-top: .05rem;
    text-align: center;
  }
  #type ul>li:last-child{
    font-size: 20px;
    margin-top: .11rem;
  }
  #type>ul:nth-child(2){
    background-image: linear-gradient(-135deg, #4BA3E7 0%, #50D1F6 100%);
  }
  #type>ul:nth-child(3){
    background-image: linear-gradient(45deg, #FEC971 0%, #F6A623 100%);
  }
  #type>ul:nth-child(4){
    background-image: linear-gradient(45deg, #FF8E8E 0%, #FF5555 60%, #FF5555 100%);
  }
</style>

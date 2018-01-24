<template>
  <div id="my_list">
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
      <div class="listItems">
        <div class="customs">
          <ul>
            <li>张三</li>
            <li>137****0975</li>
          </ul>
          <a>自驾</a>
        </div>
        <div class="projects">
          <ul>
            <li>金地家园</li>
            <li>A701</li>
          </ul>
          <ul>
            <li>张三俗</li>
            <li>02-04</li>
          </ul>
        </div>
      </div>
      <div class="listItems">
        <div class="customs">
          <ul>
            <li>张三</li>
            <li>137****0975</li>
          </ul>
          <a>自驾</a>
        </div>
        <div class="projects">
          <ul>
            <li>金地家园</li>
            <li>A701</li>
          </ul>
          <ul>
            <li>张三俗</li>
            <li>02-04</li>
          </ul>
        </div>
      </div>
      <div id="more">
        <p>超过30天的报备</p>
        <img src="../assets/img/right.png" alt=""/>
      </div>
    </section>
    <footer>
      <ul>
        <li><img src="../assets/img/client.png" alt=""/></li>
        <li>客户</li>
      </ul>
      <ul>
        <li><img src="../assets/img/client.png" alt=""/></li>
        <li>客户</li>
      </ul>
      <ul>
        <li><img src="../assets/img/client.png" alt=""/></li>
        <li>客户</li>
      </ul>
    </footer>
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
  #my_list{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
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
    background: #eee;
    padding-bottom: .45rem;
    padding-top: .15rem;
    flex: 1;
  }
  #type{
    display: flex;
    justify-content: space-around;
    margin: 0 .15rem;
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
  .listItems{
    min-height: .67rem;
    background: #fff;
    margin: .15rem;
    padding: .1rem .15rem;
  }
  .listItems ul{
    display: flex;
  }
  .customs{
    margin-bottom: .1rem;
  }
  .customs,.projects{
    display: flex;
    justify-content: space-between;
  }
  .customs>a{
    width: .44rem;
    height: .2rem;
    line-height: .18rem;
    display: inline-block;
    text-align: center;
    border: .01rem solid #48CFAD;
    border-radius: 5px;
    color: #48CFAD;
  }
  .customs>ul>li{
    margin-right: .15rem;
  }
  .projects{
    color: #888888;
  }
  .projects>ul:first-child>li{
    margin-right: .15rem;
  }
  .projects>ul:last-child>li{
    margin-left: .15rem;
  }
  #more{
    height: .44rem;
    line-height: .44rem;
    background: #fff;
    padding: 0 .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #more img{
    width: .07rem;
    height: .15rem;
    vertical-align: middle;
  }
  footer{
    min-height: .5rem;
    display: flex;
    background: #fff;
    padding-bottom: .05rem;
  }
  footer ul{
    flex: 1;
  }
</style>

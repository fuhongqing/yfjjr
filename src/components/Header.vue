<template>
  <div id="my_list">
    <header>
      <div id="search">
        <img @click="search()" src="../assets/img/search.png" alt=""/>
        <input type="text" v-model="searchStr" placeholder="项目名称／客户姓名／号码后4位"/>
      </div>
      <div id="total">
        <div><span>今日报备:</span><span v-text="dataResult.todaybaobei"></span></div>
        <div><span>全部：</span><span v-text="parseFloat(dataResult.noDK)+parseFloat(dataResult.noCJ)+parseFloat(dataResult.dfy)+parseFloat(dataResult.fy)"></span></div>
      </div>
    </header>
    <section>
      <div id="type">
        <ul>
          <li>未带看</li>
          <li v-text="dataResult.noDK"></li>
        </ul>
        <ul>
          <li>未成交</li>
          <li v-text="dataResult.noCJ"></li>
        </ul>
        <ul>
          <li>未发佣</li>
          <li v-text="dataResult.dfy"></li>
        </ul>
        <ul>
          <li>已发佣</li>
          <li v-text="dataResult.fy"></li>
        </ul>
      </div>
      <div class="listItems" v-for="(page,index) in pageLists" @click="jump()">
        <div class="customs">
          <ul>
            <li v-if="page.HouseSaleType>=3" v-text="page.cjCustomerName"></li>
            <li v-else v-text="page.FullName"></li>
            <li v-if="page.HouseSaleType>=3" v-text="page.cjCustomerPhone"></li>
            <li v-else v-text="page.PhoneNum"></li>
          </ul>
          <a v-if="(page.HouseSaleType)==1" v-text="page.lookcount+'访'"></a>
          <a v-else-if="page.HouseSaleType==3" v-text="大定"></a>
          <a v-else-if="page.HouseSaleType>3&page.HouseSaleType!=9&page.ReviewState==null" v-text="签约"></a>
          <a v-else-if="page.HouseSaleType>3&page.HouseSaleType!=9&page.ReviewState==6" v-text="已发"></a>
          <a v-else v-text="(page.Shuttle.trim())==1?'自驾':'班车'"></a>
        </div>
        <div class="projects">
          <ul>
            <li v-if="page.HouseSaleType==3||page.HouseSaleType>3&page.HouseSaleType!=9&page.ReviewState==null" v-text="page.houseName"></li>
            <li v-if="page.HouseSaleType>3&page.HouseSaleType!=9&page.ReviewState==6" v-text="'佣'+page.CommissionAmount+'元'"></li>
            <li v-else v-text="page.PropertyName"></li>
          </ul>
          <ul>
            <li v-text="page.memberName"></li>
            <li v-text="page.Createtime"></li>
          </ul>
        </div>
      </div>
      <div id="more" @click="loadMore()" v-show="isMoreShow">
        <p>超过30天的报备</p>
        <img src="../assets/img/right.png" alt=""/>
      </div>
      <footer>
        <ul>
          <li><img src="../assets/img/client.png" alt=""/></li>
          <li>首页</li>
        </ul>
        <ul>
          <li><img src="../assets/img/client.png" alt=""/></li>
          <li>客户</li>
        </ul>
        <ul>
          <li><img src="../assets/img/client.png" alt=""/></li>
          <li>设置</li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
//  import kflHeader from '@/components/Header'
export default {
      name: 'yhfHeader',
      data(){
         return{
           searchStr:'',
           pageSum:0,//总页数
           pageLists:[],//列表数据
           dataResult:[],//数据统计
           isMoreShow:true//30天报备是否显示
         }
      },
      created(){//, { jsonp: 'callback' }
        this.$http.get('http://'+serverUrl+'/efangmem/customer/allCustomerList?agencyID=5886&pageNum=1').then(function(response){
          //console.log(response.body.data);
          this.pageSum=response.body.data.pageSum;
          this.pageLists=response.body.data.page;
          },
      function(error){
        console.log(error);
      });
        this.$http.get('http://'+serverUrl+'/efangmem/customer/customerCount?agencyID=5886').then(function(response){
          this.dataResult=response.body.data;
        },function(error){
          console.log(error);
        });
      },
      methods:{
        loadMore(){
          this.isMoreShow=false;
          this.$http.get('http://'+serverUrl+'/efangmem/customer/mouthAgoCustomerper?agencyID=5886&pageNum=1').then(function(response){
             this.pageLists=response.body.data.page;
          },function(error){
            console.log(error);
          })
        },
        jump(){
          this.$parent.jump('/detail');
        },
        search(){
          this.$http.get('http://'+serverUrl+'/efangmem/customer/allCustomerList?agencyID=5886&pageNum=1&search='+this.searchStr).then(function(response){
            this.pageLists=response.body.data.page;
          },function(error){
            console.log(error);
          })
        }
      }
}
</script>
<!--lang="less"-->
<style scoped>
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
    margin-bottom: .66rem;
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
    text-align: left;
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
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    min-height: .5rem;
    display: flex;
    background: #fff;
    padding-bottom: .05rem;
  }
  footer ul{
    flex: 1;
  }
</style>

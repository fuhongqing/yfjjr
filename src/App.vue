<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import Router from 'vue-router';
  export default {
    name: 'app',
    data(){
      return {
        urlDev: 'localhost',
        urlBuild: 'daili.ehaofang.com:8099'
      }
  },
  methods: {
    jump: function (path) {
      this.$router.push(path);
    }
  },
  created() {
    window.serverUrl = this.urlDev;
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 6.17rem;
  overflow: auto;
  font-size: 14px;
}
body{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,p{
  margin:0;
  padding:0;
  list-style: none;
}
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
/*图片*/
img{
  vertical-align: middle;
}
/*表单placeholder文字颜色*/
input::-webkit-input-placeholder{
  color:#D6D6D6!important;
}
</style>

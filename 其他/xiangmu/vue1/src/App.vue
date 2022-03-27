<template>
  <div id="app">
    <h1>父组件数据---{{ str }}---来自子组件2的数据--{{ childerndata }}</h1>
    <Header :str="str"></Header>
    <Swiper @changeEvent='fn'></Swiper>
    
  </div>
</template>

<script>
import Header from './components/home/Header.vue'
import Swiper from './components/home/Swiper.vue'

export default {
  name:'App',
  data(){
    return {
      str:"123",
      arr:[1,2,3,4],
      childerndata:''
    }
  },
  components:{
    Header,
    Swiper
  },
  methods:{
    fn( val ){
      this.childerndata = val;
    }
  },
  created(){
    this.axios({
      url:'',
      params:{}
    }).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style>

</style>

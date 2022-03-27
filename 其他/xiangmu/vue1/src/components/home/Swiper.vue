<template>
    <div>
        <h1>子组件2这是轮播图</h1>
        <div>{{ Swiperstr }}</div>
        <div>这是来自自组件1的数据---{{ chil }}</div>
        <button @click="btn">这是子组件2的按钮</button>
    </div>
</template>
<script>
import bus from './bus'
export default{
    data(){
        return {
            Swiperstr:'这是子组件2的数据',
            // children1data:'11'
        }
    },
    computed:{
        chil(){
            bus.$on('changeStr',( val )=>{
                this.children1data = val;
            })
            return 111
        }
    },
    methods:{
        btn(){
            this.$emit('changeEvent',this.Swiperstr)
        },
    }
}
</script>

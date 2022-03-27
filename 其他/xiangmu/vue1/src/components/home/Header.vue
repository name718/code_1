<template>
    <div>
        <h1>子组件1这是头部组件</h1>
        <h1>{{ str }}----这是来自父组件的数据</h1>
        <button @click="btn">这是子组件1的按钮</button>
    </div>
</template>
<script>
import bus from './bus'
export default {
    name:'Header',
    // props:['str']
    props:{
        str:String
    },
    data(){
        return {
            children1data:"这是自组件1的数据"
        }
    },
    methods:{
        btn(){
            bus.$emit('changeStr',this.children1data)
        }
    }
}
</script>

<template>
    <div ref="scroll" id="scroll-page" style="overflow:hidden">
        <slot></slot>
        <div
        style="height:40px;margin-top:10px;z-index: 1;"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(245,245,245)"></div>
    </div>
</template>
<script>
export default {
    name:"index",
    props:{
        loading:Boolean,
        noData:Boolean,
        offset:Number
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll,false);
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    data(){
        return {
            scrollAction:{
                x:'undefined',
                y:'undefined'
            }
        }
    },
    methods:{
        handleScroll(e){
            let that = this;
            if(!that.noData){
                let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
                let scrollPage = document.getElementById('scroll-page');
                if(curHeight + window.innerHeight >= that.$refs.scroll.offsetHeight + that.offset){
                    if(!that.loading){
                        that.$emit('load');
                    }
                }
            }
        },
        isDownDirection(){
            if(typeof this.scrollAction.x == 'undefined'){
                this.scrollAction.x = window.pageXOffset;
                this.scrollAction.y = window.pageYOffset;
            }
            let diffx = this.scrollAction.x - window.pageXOffset;
            let diffy = this.scrollAction.y - window.pageYOffset;

            this.scrollAction.x = window.pageXOffset;
            this.scrollAction.y = window.pageYOffset;

            if(diffx < 0){

            }else if(diffx > 0){

            }else if(diffy < 0){
                return true;
            }else if(diffy > 0){
                 
            }
        }
    }

}
</script>

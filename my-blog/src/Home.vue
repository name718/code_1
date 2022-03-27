<template>
    <div id="home">
        <el-container>
            <base-header :activeIndex="activeIndex"></base-header>
            <router-view class="me-container"/>
            <base-footer v-show="footerShow"></base-footer>
        </el-container>
    </div>
</template>

<script>
import BaseFooter from "./components/common/BaseFooter.vue"
import BaseHeader from "./components/common/BaseHeader.vue"
export default {
    name:"Home",
    components:{
        'base-footer':BaseFooter,
        'base-header':BaseHeader
    },
    data(){
        return {
            activeIndex:'/',
            footerShow:true
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.activeIndex = to.path;
        })
    },
    beforeRouteUpdate(to, from,next){
        if(to.path == '/'){
            this.footerShow = true;
        }else{
            this.footerShow = false;
        }
        this.activeIndex = to.path;
        next();
    }
}
</script>

<style scoped>
    .me-container{
        margin: 100px auto 140px;
    }
</style>
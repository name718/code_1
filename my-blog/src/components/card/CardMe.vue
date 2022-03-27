<template>
    <el-card>
        <h1 class="me-author-name">码神之路</h1>
        <div class="me-zuthor-description">
            <span><i class="el-icon-location-outline"></i>&nbsp;北京&海淀</span>
            <span><i class="me-icon-job"></i>&nbsp;java开发</span>
        </div>
        <div class="me-author-tool">
            <i @click="showTool(qq)" :title="qq.title" class="iconfont icon-qq"></i>
            <i @click="showTool(bilibili)" :title="bilibili" class="iconfont icon-bilibili-fill"></i>
        </div>
    </el-card>
</template>

<script>
export default {
    name:"CardMe",
    data(){
        return {
            qq:{title:'QQ',message:'123345'},
            bilibili:{
                title:'哔哩哔哩',
                message:"<a target='_blank' href=''></a>"
            }
        }
    },
    methods:{
        showTool(tool){
            this.$message({
                duration:0,
                showClose:true,
                dangerouslyUseHTMLString:true,
                message:'<strong>'+tool.message + '</strong>'
            });
        }
    }
}
</script>

<style scoped>
    .me-author-name{
        text-align: center;
        font-size:30px;
        border-bottom: 1px solid #00aaff;
    }
    .me-author-description {
        padding: 8px 0;
    }
    .me-author-tool {
        text-align: center;
        padding-top: 10px;
    }
    .me-author-tool i {
        cursor: pointer;
        padding:4px 10px;
        font-size: 30px;
    }
</style>
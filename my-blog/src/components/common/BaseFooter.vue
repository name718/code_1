<template>
    <el-footer class="me-area">
        <div class="me-footer">
            <p>Desigin by
                <strong>
                    <router-link to="/" class="me-login-design-color">码神之路</router-link>
                </strong>
            </p>
        </div>
    </el-footer>
</template>

<script>
    export default {
        name:'BaseFooter',
        data(){
            return {

            }
        },
        methods:{

        },

    }
</script>

<style scoped>
    .el-footer{
        min-width: 100%;
        box-shadow: 0 -2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1x hsla(0, 0%, 7%, .1);
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1024;
    }
    .me-footer {
        text-align: center;
        line-height: 60px;
        font-family: serif;
        font-size: 18px;
    }
    .me-login-design-color {
        color: #00aaff !important;
    }
</style>
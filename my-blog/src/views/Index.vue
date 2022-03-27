<template>
  <div>
    <el-container>
      <el-main class="me-articles">
        <ArticleScrollPage></ArticleScrollPage>
      </el-main>
      <el-aside>
        <card-me></card-me>
        <card-tag :tags='hotTags'></card-tag>
        <card-article cardHeader="最热文章" :articles="hotArticles"></card-article>
        <card-archive cardHeader="文档归类" :archives="archives"></card-archive>
        <card-article cardHeader="最新文章" :articles="newArticles"></card-article>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import ArticleScrollPage from "../components/common/ArticleScrollPage.vue";
import CardMe from '../components/card/CardMe.vue'
import CardTag from '../components/card/CardTag.vue'
import CardArticle from '../components/card/CardArticle.vue'
import CardArchive from '../components/card/CardArchive.vue'
export default {
  data() {
    return {
      hotTags:[],
      hotArticles: [],
      newArticles: [],
      archives:[]
    };
  },
  components: {
    ArticleScrollPage,
    'card-me':CardMe,
    'card-tag':CardTag,
    'card-article':CardArticle,
    'card-archive':CardArchive
  },
  created(){
    this.getHotTags();
    this.getHotArticles();
    this.getNewArticles();
    this.getArchives();
  },
  methods:{
    getHotTags(){
      // 发起请求数据
    },
    getHotArticles(){
       // 发起请求数据
    },
    getNewArticles(){
       // 发起请求数据
    },
    getArchives(){
      // 发起请求数据
    }
  }
};
</script>

<style scoped="">
.el-container {
  width: 960px;
}
.el-aside {
  margin-left: 20px;
  width: 260px;
}
.el-main {
  padding: 0px;
  line-height: 16px;
}
.el-card {
  border-radius: 0;
}
.el-card:not {
  margin-top: 20px;
}
</style>

<template>
  <scroll-page
    :loading="loading"
    :offset="offset"
    :no-data="noData"
    @load="load"
  >
    <ArticleItem v-for="article in articles" v-bind="article" :key="article.id">
    </ArticleItem>
  </scroll-page>
</template>

<script>
import ArticleItem from "../article/Articleltem.vue";
import ScrollPage from "../scrollpage/index.vue";
import { getArticles } from '../../api/articles';
export default {
  name: "ArticleScrollPage",
  components: {
    "scroll-page": ScrollPage,
    ArticleItem,
  },
  data() {
    return {
      loading: false,
      noData: false,
      offset: 0,
      innerPage: 0,
      articles: [
        {
          id: "1",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
        {
          id: "2",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
        {
          id: "3",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
        {
          id: "4",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
        {
          id: "5",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
        {
          id: "6",
          weight: 1,
          title: "标题1",
          commentCounts: 123,
          viewCounts: 123,
          summary: "概要11",
          author: "作者",
          tags: [{ tagName: "vue" }],
          creatData: "3333",
        },
      ],
    };
  },
  methods: {
    load() {
      // alert("触发分页");
      this.getArticles();
    },
    getArticles() {
      this.loading = true;
      getArticles(this.innerPage)
        .then((res) => {
          if (res.data.success) {
            if (res.data.data.length <= 0) {
              this.noData = true;
            }
            this.articles = this.articles.concat(res.data.data);
            this.innerPage += 1;
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((err) => {
          this.$message.error("请求错误");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.el-card {
  border-radius: 0;
}
.el-card:not(:first-child) {
  margin-top: 10px;
}
</style>

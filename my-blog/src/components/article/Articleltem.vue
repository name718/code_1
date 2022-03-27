<template>
	<el-card class="me-area">
		<div class="me-article-header">
			<a @click="view(id)" class="me-article-title">{{title}}</a>
			<el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button>
			<span class="me-pull-right me-article-count">
				<i class="me-icon-comment"></i>&nbsp;{{commentCounts}}
			</span>
			<span class="me-pull-right me-article-count">
				<i class="el-icon-view"></i>&nbsp;{{viewCounts}}
			</span>
		</div>
		
		<div class="me-artile-description">
			{{summary}}
		</div>
		<div class="me-article-footer">
			<span class="me-article-author">
				<i class="me-icon-author"></i>&nbsp;<el-tag>{{author}}</el-tag>
			</span>
			<el-tag v-for="t in tags" :key="t.tagName" size="mini" type="success">{{t.tagName}}</el-tag>
			<span class="me-pull-right me-article-count">
				<i class="el-icon-time"></i>&nbsp;{{creatData | format}}
			</span>
		</div>
	</el-card>
</template>

<script>
	export default {
		name:"ArticleItem",
		props:{
			id:String,
			weight:Number,
			title:String,
			commentCounts:Number,
			viewCounts:Number,
			summary:String,
			author:String,
			tags:Array,
			creatData:String
		},
		data(){
			return {
				
			}
		},
		methods:{
			view(id){
					this.$router.push({path:`/view/${id}`})
			},
		}
	}
</script>

<style scoped>
	.me-article-header{
		padding-bottom: 10px;
	}
	.me-article-title{
		font-weight: 600;
	}
	.me-article-icon{
		padding: 3px 8px;
	}
	.me-article-count{
		color: #ff00ff;
		padding-left: 14px;
		font-size: 13px;
	}
	.me-pull-right{
		float: right;
	}
	.me-artile-description{
		font-size: 13px;
		line-height: 24px;
		margin-bottom: 10px;
	}
	.me-article-author{
		color: #aa00ff;
		padding-left: 18px;
		font-size: 13px;
	}
	.el-tag{
		margin-left: 6px;
		color: #ffffff;
		background-color: #ff00ff;
	}
</style>

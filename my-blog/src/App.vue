<template>
	<div id="app">
		<router-view></router-view>
		<go-top></go-top>
	</div>
</template>

<script>
	import GoTop from './components/gotop/GoTop.vue'
	export default {
		name: 'app',
		components:{
			"go-top":GoTop
		}
	}
</script>

<style>
	* {margin: 0; padding: 0;}
	body{
		background-color: #f5f5f5;
		font-weight: 400;
		line-height: 1.5;
	}
	a{
		cursor: pointer;
		text-decoration: none;
		transition: none 86ms ease-out;
	}
	a:hover{
		color: #00aaff;
	}
	html{
		height: 100%;
	}
	body{min-height: 100%;}
	body{
		position: relative;
	}
</style>

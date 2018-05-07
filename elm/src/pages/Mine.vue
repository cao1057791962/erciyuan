<template>
	<div>
	<app-header name="我的"></app-header>
	<app-content :Ih="true">
		<login-com></login-com>
		<set-com></set-com>
	</app-content>
	</div>
</template>

<script>
	import login from "../components/Mine/login"
	import sett from "../components/Mine/Setting"
	export default{
		components:{
			[login.name]:login,
			[sett.name]:sett
		}
	}
</script>

<style>
</style>
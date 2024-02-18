<script>
	import '../app.postcss';
	import '$lib/global.css'
	import Footer from '../lib/Footer.svelte';
</script>
<main class="flex h-screen w-full justify-center items-center flex-col">
	<nav class="flex w-full text-3xl">
		<div class="flex justify-between w-full px-10 py-1">
			<div class="flex gap-6">
				<a href="/">home</a>
				<a href="/typing">type</a>
				<a href="/stats">history</a>
			</div>
			<div class="flex gap-6">
				<p>username</p>
				<a href="/auth">logout</a>
			</div>
		</div>
	</nav>
	<slot />
	<Footer />
</main>



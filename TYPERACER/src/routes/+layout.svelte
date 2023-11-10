<script>
	import '../app.postcss';
	import '$lib/global.css'
	import Footer from '../lib/Footer.svelte';
</script>
<main class="flex h-screen w-full justify-center items-center flex-col">
	<slot />
	<Footer />
</main>



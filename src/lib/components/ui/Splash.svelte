<script lang="ts">
	import type { SplashProps } from '$lib/types';

	export let isFirstLoad: boolean;
	export let isTransitioning: boolean;
	export let onEnter: () => void;

	console.log('Splash component props:', { isFirstLoad, isTransitioning });
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-[#F5F5F5] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] transition-all duration-1000 z-50"
	class:opacity-100={!isTransitioning}
	class:opacity-0={isTransitioning}
>
	<div class="text-center space-y-4">
		<h1
			class="text-5xl font-medium tracking-tight mb-3 opacity-0"
			class:animate-fade-in={isFirstLoad}
		>
			Matt Henchey
		</h1>
		<p class="text-xl font-light tracking-wide opacity-0" class:animate-fade-in-delay={isFirstLoad}>
			Software Engineer
		</p>
		<button
			on:click={onEnter}
			class="px-6 py-2 text-sm font-medium rounded-md border border-[#050D09] dark:border-green-50 hover:bg-[#050D09] hover:text-green-50 dark:hover:bg-green-50 dark:hover:text-[#050D09] transition-all duration-600 opacity-0"
			class:animate-fade-in-longer-delay={isFirstLoad}
		>
			Enter
		</button>
	</div>
</div>

<style>
	.animate-fade-in {
		animation: fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	.animate-fade-in-delay {
		animation: fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
	}

	.animate-fade-in-longer-delay {
		animation: fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

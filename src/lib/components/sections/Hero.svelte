<script lang="ts">
	import type { HeroSectionProps } from '$lib/types';
	import { quotes } from '$lib/data/hero';

	export let isVisible: boolean;
	let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
	$: currentQuote = quotes[currentQuoteIndex];

	function cycleQuote() {
		currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
	}
</script>

<section class="h-screen flex items-center justify-center">
	<div
		class="max-w-5xl mx-auto px-6 text-center opacity-0 transition-all duration-1000 delay-200"
		class:opacity-100={isVisible}
	>
		<div class="h-48 mb-6 flex flex-col justify-center">
			<h1
				class="text-3xl
				font-bold
				mb-1
				bg-gradient-to-r from-orange-600 to-orange-900
				dark:bg-gradient-to-r dark:from-orange-600 dark:to-orange-100
				text-transparent bg-clip-text pb-2 transition-all duration-1000"
			>
				{currentQuote.quote}
			</h1>
			<h2
				class="text-md font-light mb-6 text-orange-900 dark:text-orange-200 italic transition-all duration-1000"
			>
				{currentQuote.author}
			</h2>
		</div>

		<button
			class="text-sm
			bg-gradient-to-r from-orange-600 to-orange-900
			dark:bg-gradient-to-r dark:from-orange-600 dark:to-orange-100
			bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 px-4 py-2 rounded-full border
			border-orange-600/50
			hover:border-orange-600/50
			mb-12"
			on:click={cycleQuote}
			aria-label="Cycle Wisdom"
		>
			↻
		</button>

		<!-- Bouncing Arrows -->
		<div class="flex flex-col items-center gap-0.1">
			<div class="flex gap-6 animate-bounce-delay-0">
				{#each Array(6) as _}
					<svg class="w-6 h-6 opacity-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				{/each}
			</div>
			<div class="flex gap-5 animate-bounce-delay-300">
				{#each Array(6) as _}
					<svg class="w-6 h-6 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				{/each}
			</div>
			<div class="flex gap-4 animate-bounce-delay-600">
				{#each Array(6) as _}
					<svg class="w-6 h-6 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.animate-bounce-delay-0 {
		animation: bounce 1s infinite;
		animation-delay: 0s;
	}

	.animate-bounce-delay-300 {
		animation: bounce 1s infinite;
		animation-delay: 0.1s;
	}

	.animate-bounce-delay-600 {
		animation: bounce 1s infinite;
		animation-delay: 0.2s;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%);
			animation-timing-function: cubic-bezier(0.6, 0, 1, 1);
		}
		50% {
			transform: translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
</style>

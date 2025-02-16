<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import { navigationItems } from '$lib/data/navigation';

	export let isVisible: boolean;

	export let onToggleContactBox: () => void;
	let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
	$: currentQuote = quotes[currentQuoteIndex];
</script>

<header
	class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-40"
>
	<div class="max-w-6xl mx-auto px-4 py-4">
		<div class="relative flex justify-center items-center">
			<!-- Contact Button -->
			<button
				on:click={onToggleContactBox}
				class="absolute left-0 hover:text-green-500 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-green-800 transition-opacity duration-200 pulse"
			>
				Contact
			</button>

			<!-- Quote Section -->
			<div
				class="w-1/2 text-center max-w-2xl opacity-0 transition-all duration-1000"
				class:opacity-100={isVisible}
			>
				<p
					class="text-lg font-medium bg-gradient-to-r from-green-600 to-green-900 dark:from-green-600 dark:to-green-900 text-transparent bg-clip-text"
				>
					{currentQuote.quote}
				</p>
				<p class="text-md font-light text-green-900 dark:text-green-200 italic">
					{currentQuote.author}
				</p>
			</div>

			<!-- Theme Toggle -->
			<div class="absolute right-0">
				<slot name="theme-toggle" />
			</div>
		</div>
	</div>
</header>

<style>
	@keyframes pulse-text {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.pulse {
		animation: pulse-text 3s ease-in-out infinite;
	}
</style>

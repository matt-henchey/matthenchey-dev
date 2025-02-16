<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import { navigationItems } from '$lib/data/navigation';

	export let isVisible: boolean;

	let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
	$: currentQuote = quotes[currentQuoteIndex];
</script>

<header class="fixed top-0 left-0 right-0 z-40">
	<div class="max-w-8xl mx-auto px-4 py-2 md:py-4">
		<div class="flex justify-between items-center">
			<!-- Quote Section -->
			<div
				class="w-full md:w-1/2 mx-auto text-center opacity-0 transition-all duration-300"
				class:opacity-100={isVisible}
			>
				<p
					class="text-sm md:text-lg font-medium bg-gradient-to-r from-green-600 to-green-900 dark:from-green-600 dark:to-green-900 text-transparent bg-clip-text"
				>
					{currentQuote.quote}
				</p>
				<p class="text-sm md:text-md font-light text-green-900 dark:text-green-200 italic">
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

<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import { navigationItems } from '$lib/data/navigation';

	export let isVisible: boolean;

	let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
	$: currentQuote = quotes[currentQuoteIndex];
</script>

<header class="sticky top-0 left-0 right-0 w-full z-40 pd-4">
	<div class="backdrop"></div>
	<!-- Quote Section -->
	<div
		class="max-w-4xl mx-auto text-center opacity-0 transition-all duration-300 h-full relative"
		class:opacity-100={isVisible}
	>
		<p
			class="text-sm md:text-lg font-medium bg-gradient-to-r from-green-600 to-green-900 dark:from-green-600 dark:to-green-900 text-transparent bg-clip-text px-4 py-2"
		>
			{currentQuote.quote}
		</p>
		<p class="text-xs md:text-md font-light text-green-900 dark:text-green-200 italic">
			{currentQuote.author}
		</p>
	</div>
	<!-- Theme Toggle -->
	<div class="absolute bottom-2 right-2">
		<slot name="theme-toggle" />
	</div>
</header>

<style>
	header {
		--thickness: 4px;
		position: sticky;
		top: 0;
		width: 100%;
		height: 6rem;
	}
	@supports (backdrop-filter: blur(16px)) or (-webkit-backdrop-filter: blur(16px)) {
		/* DARK MODE (if .dark is present on the root) */
		:global(body.dark) header {
			background: hsl(0deg 0% 5% / 0.5);
		}

		:global(body.dark) .backdrop {
			position: absolute;
			inset: 0;

			-webkit-backdrop-filter: blur(16px);
			backdrop-filter: blur(16px);
			background: linear-gradient(to bottom, hsl(0deg 0% 30% / 0.1), hsl(0deg 0% 100% / 0.05));
			pointer-events: none;
		}

		/* LIGHT MODE (when .dark is not present) */
		:global(body:not(.dark)) header {
			background: hsl(0deg 0% 98% / 0.6);
		}
		:global(body:not(.dark)) .backdrop {
			position: absolute;
			inset: 0;
			-webkit-backdrop-filter: blur(16px);
			backdrop-filter: blur(16px);
			background: linear-gradient(to bottom, hsl(0deg 0% 98% / 0.6), hsl(0deg 0% 98% / 0.4));
		}
	}

	@supports (mask-image: none) or (-webkit-mask-image: none) {
		.backdrop {
			height: 200%;
			-webkit-mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
			mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
		}
	}
</style>

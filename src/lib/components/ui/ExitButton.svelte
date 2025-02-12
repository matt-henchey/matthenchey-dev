<script lang="ts">
	import type { ExitButtonProps } from '$lib/types';

	export let onExit: () => void;
</script>

<button
	on:click={onExit}
	class="fixed top-4 left-4 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 hover:bg-gray-200 dark:hover:bg-stone-800 z-50 group"
	aria-label="Exit site"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[-2px]"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M7 16l-4-4m0 0l4-4m-4 4h14m-6 4v1a3 3 0 01-3 3H2a3 3 0 01-3-3V7a3 3 0 013-3h8a3 3 0 013 3v1"
		/>
	</svg>
</button>

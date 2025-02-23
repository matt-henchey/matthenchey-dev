<script lang="ts">
	import { theme, toggleHamburgerMenu } from '$lib/stores/theme';
</script>

<button
	on:click={() => {
		toggleHamburgerMenu();
	}}
	class="transition-all duration-200 hover:scale-110 hover:rotate-45 bg-transparent text-[var(--color-red-400)] hover:text-[var(--color-red-300)] dark:text-[var(--color-red-400)] dark:hover:text-[var(--color-red-300)]"
	aria-label="Hamburger menu"
>
	{#if $theme === 'dark'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6 transition-transform duration-300"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	{:else}
		<!-- Lightmode Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6 transition-transform duration-300"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	{/if}
</button>

<script lang="ts">
	import type { NavigationProps } from '$lib/types';
	import { navigationItems } from '$lib/data/navigation';
	import { createEventDispatcher } from 'svelte';

	type NavigationEvents = {
		toggleContactBox: void;
	};

	const dispatch = createEventDispatcher<NavigationEvents>();

	export let onToggleContactBox: () => void;
	export let isVisible: boolean;
</script>

<nav
	class="fixed top-6 left-0 right-0 p-6 transition-all duration-1000 delay-400 z-40"
	class:opacity-0={!isVisible}
	class:opacity-100={isVisible}
>
	<div class="max-w-6xl mx-auto flex justify-between items-center">
		<div class="text-lg font-medium">
			<a href="/" class="hover:opacity-20 transition-opacity duration-1000"> Matt Henchey</a>
		</div>
		<div class="space-x-8">
			{#each navigationItems as item}
				<a href={item.href} class="hover:opacity-80 transition-opacity duration-1000">
					{item.label}
				</a>
			{/each}
			<button
				on:click={onToggleContactBox}
				class="hover:opacity-90 transition-opacity duration-1000"
			>
				Contact
			</button>
		</div>
	</div>
</nav>

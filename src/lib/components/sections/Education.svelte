<script lang="ts">
	import type { EducationSectionProps } from '$lib/types';
	import { education } from '$lib/data/education';

	export let isVisible: boolean;
</script>

<section id="education" class="pt-16 pb-10 px-4 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-200"
		class:opacity-100={isVisible}
	>
		<div class="flex">
			<h1 class="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gradient-primary">> education</h1>
		</div>

		{#each education as entry}
			<div class="border-l-2 pl-6 border-[var(--color-green-500)] border-opacity-20">
				<h3 class="text-2xl font-semibold text-gradient-secondary">
					{entry.degree}
				</h3>
				<p class="text-lg opacity-80 mb-2">{entry.school} • {entry.period}</p>
				<p class="text-lg opacity-90">{entry.description}</p>
			</div>
		{/each}
	</div>
</section>

<script lang="ts">
	import type { EducationSectionProps } from '$lib/types';
	import { education } from '$lib/data/education';

	export let isVisible: boolean;
</script>

<section id="education" class="py-40 px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-900"
		class:opacity-100={isVisible}
	>
		<h2 class="text-4xl font-bold mb-8">Education</h2>
		{#each education as entry}
			<div class="border-l-2 pl-6 border-green-400 border-opacity-20">
				<h3 class="text-2xl font-semibold">{entry.degree}</h3>
				<p class="text-lg opacity-80 mb-2">{entry.school} • {entry.period}</p>
				<p class="text-lg opacity-90">{entry.description}</p>
			</div>
		{/each}
	</div>
</section>

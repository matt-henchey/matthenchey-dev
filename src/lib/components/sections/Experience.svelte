<script lang="ts">
	import type { ExperienceSectionProps } from '$lib/types';
	import { experiences } from '$lib/data/experience';

	export let isVisible: boolean;
</script>

<section id="work" class="py-40 px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-700"
		class:opacity-100={isVisible}
	>
		<h2 class="text-4xl font-bold mb-8">Experience</h2>
		<div class="space-y-12">
			{#each experiences as experience}
				<div
					class="border-l-2 pl-6 {experience.isHighlighted
						? 'border-green-500'
						: 'border-green-400 border-opacity-20'}"
				>
					<h3 class="text-2xl font-semibold">{experience.title}</h3>
					<p class="text-lg opacity-80 mb-2">{experience.company} • {experience.period}</p>
					<ul class="list-disc list-inside space-y-2 opacity-90">
						{#each experience.responsibilities as responsibility}
							<li>{responsibility}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

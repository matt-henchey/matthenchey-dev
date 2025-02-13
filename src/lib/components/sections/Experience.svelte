<script lang="ts">
	import type { ExperienceSectionProps } from '$lib/types';
	import { experiences } from '$lib/data/experience';

	export let isVisible: boolean;
</script>

<section id="work" class="py-20 px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-400"
		class:opacity-100={isVisible}
	>
		<h2
			class="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent"
		>
			> experience
		</h2>
		<div class="space-y-12">
			{#each experiences as experience}
				<div
					class="border-l-2 pl-6 {experience.isHighlighted
						? 'border-orange-600'
						: 'border-orange-600 border-opacity-20'}"
				>
					<h3 class="text-2xl font-semibold text-orange-600">{experience.title}</h3>
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

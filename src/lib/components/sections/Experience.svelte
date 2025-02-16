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
			class="text-5xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent"
		>
			> experience
		</h2>
		<div class="space-y-12">
			{#each experiences as experience}
				<div
					class="border-l-2 pl-6 {experience.isHighlighted
						? 'border-green-600'
						: 'border-green-600 border-opacity-20'}"
				>
					<div class="flex items-center gap-2">
						<h2
							class="text-2xl font-semibold text-green-600 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
						>
							{experience.title}
						</h2>
						<p class="text-md opacity-80 mb-2 text-gray-400">=></p>
						<a
							href={experience.companyUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-teal-500 transition-colors duration-200 mb-2 text-green-300 outline outline-1 outline-green-900 rounded-md p-1 min-w-[150px] inline-block text-center"
						>
							{experience.company}
						</a>
					</div>
					<p class="text-lg opacity-80 mb-2">{experience.period}</p>
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

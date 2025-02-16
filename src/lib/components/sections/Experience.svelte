<script lang="ts">
	import type { ExperienceSectionProps } from '$lib/types';
	import { experiences } from '$lib/data/experience';

	export let isVisible: boolean;
</script>

<section id="experience" class="py-12 md:py-20 px-4 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-400"
		class:opacity-100={isVisible}
	>
		<!-- Header -->
		<h2
			class="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent"
		>
			> experience
		</h2>
		<!-- Experience Section -->
		<div class="space-y-8 md:space-y-12">
			{#each experiences as experience}
				<div
					class="border-l-2 pl-4 md:pl-6
					{experience.isHighlighted ? 'border-green-600' : 'border-green-600 border-opacity-20'}"
				>
					<div class="flex flex-col md:flex-row md:items-center gap-2">
						<h2
							class="text-xl md:text-2xl font-semibold
						           bg-gradient-to-r from-green-700 to-green-900
						           bg-clip-text text-transparent"
						>
							{experience.title}
						</h2>
						<h2 class="text-2xl text-green-900">=></h2>
						<a
							href={experience.companyUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center"
						>
							{experience.company}
						</a>
					</div>
					<p class="text-base md:text-lg opacity-80 mb-2">{experience.period}</p>
					<ul class="list-disc list-inside space-y-2 opacity-90 text-sm md:text-base pl-2 md:pl-4">
						{#each experience.responsibilities as responsibility}
							<li class="leading-relaxed">{responsibility}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

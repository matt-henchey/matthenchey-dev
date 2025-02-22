<script lang="ts">
	import type { ExperienceSectionProps } from '$lib/types';
	import { experiences } from '$lib/data/experience';

	export let isVisible: boolean;
</script>

<section id="experience" class="pt-16 pb-10 px-4 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-200"
		class:opacity-100={isVisible}
	>
		<!-- Header -->
		<div class="flex">
			<h1 class="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gradient-primary">
				> professional experience
			</h1>
		</div>

		<!-- Experience Section -->
		<div class="space-y-3 md:space-y-6">
			{#each experiences as experience}
				<div
					class="border-l-2 pl-4 md:pl-6 p-6 rounded-3xl
					{experience.isHighlighted
						? 'border-[var(--color-dark-gray-800)]'
						: 'border-[var(--color-dark-gray-900)] border-opacity-20'}"
				>
					<div class="flex flex-col md:flex-row md:items-center gap-2">
						<h2
							class="text-xl md:text-2xl font-semibold
						           text-gradient-secondary"
						>
							{experience.title}
						</h2>
						<h2 class="text-2xl text-gradient-secondary">=></h2>
						<button
							on:click={() => window.open(experience.companyUrl, '_blank')}
							class="btn-primary"
						>
							{experience.company}
						</button>
					</div>
					<p class="text-base md:text-lg opacity-80 mb-2">{experience.period}</p>
					<ul class="list-disc list-inside space-y-4 opacity-90 text-sm md:text-base pl-2 md:pl-4">
						{#each experience.responsibilities as responsibility}
							<li class="leading-relaxed">{responsibility}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

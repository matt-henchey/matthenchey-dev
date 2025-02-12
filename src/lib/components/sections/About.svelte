<script lang="ts">
	import type { AboutSectionProps } from '$lib/types';
	import { aboutData } from '$lib/data/about';

	export let isVisible: boolean;
</script>

<section id="about" class="py-40 px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-500"
		class:opacity-100={isVisible}
	>
		<div class="flex justify-center mb-12">
			<img src="/images/self.png" alt="Matt Henchey" class="rounded-full w-48 h-48 object-cover" />
		</div>
		<h2 class="text-4xl font-bold mb-8">About</h2>
		<div class="space-y-8">
			<div class="text-lg space-y-4">
				{#each aboutData.description as paragraph, i}
					{#if i === 0}
						<p class="opacity-90">{paragraph}</p>
					{:else if i === 1}
						<p class="opacity-70">{paragraph}</p>
					{:else if i === 2}
						<p class="opacity-50">{paragraph}</p>
					{/if}
				{/each}
			</div>
			<div class="grid grid-cols-2 gap-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Core Skills</h3>
					<ul class="list-disc list-inside space-y-2 opacity-90">
						{#each aboutData.skills.coreSkills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-4">Technologies</h3>
					<ul class="list-disc list-inside space-y-2 opacity-90">
						{#each aboutData.skills.technologies as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

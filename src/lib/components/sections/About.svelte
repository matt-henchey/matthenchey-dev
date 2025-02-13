<script lang="ts">
	import type { AboutSectionProps } from '$lib/types';
	import { aboutData } from '$lib/data/about';
	const {
		description,
		skills: { engineering, leadership, technologies }
	} = aboutData;

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
						<p class="opacity-80">{paragraph}</p>
					{:else if i === 2}
						<p class="opacity-70">{paragraph}</p>
					{/if}
				{/each}
			</div>

			<!-- Engineering Skills -->
			<div>
				<h3
					class="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-800 to-cyan-100 bg-clip-text text-transparent"
				>
					Engineering
				</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div>
						<h4 class="text-lg font-medium mb-3 border-b border-blue-200 dark:border-blue-800 pb-1">
							Backend
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each engineering.backend as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4 class="text-lg font-medium mb-3 border-b border-blue-200 dark:border-blue-800 pb-1">
							Data
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each engineering.data as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4 class="text-lg font-medium mb-3 border-b border-blue-200 dark:border-blue-800 pb-1">
							Cloud
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each engineering.cloud as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Leadership Skills -->
			<div>
				<h3
					class="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-800 to-pink-100 bg-clip-text text-transparent"
				>
					Leadership
				</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-purple-200 dark:border-purple-800 pb-1"
						>
							Technical Leadership
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each leadership.technical as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-purple-200 dark:border-purple-800 pb-1"
						>
							Management
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each leadership.management as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Technologies -->
			<div class="mt-12">
				<h3
					class="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-800 to-emerald-100 bg-clip-text text-transparent"
				>
					Technologies
				</h3>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<!-- Databases -->
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-green-200 dark:border-green-800 pb-1"
						>
							Databases
						</h4>
						<ul class="space-y-2">
							{#each technologies.databases as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Languages -->
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-green-200 dark:border-green-800 pb-1"
						>
							Languages
						</h4>
						<ul class="space-y-2">
							{#each technologies.languages as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Frameworks -->
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-green-200 dark:border-green-800 pb-1"
						>
							Frameworks
						</h4>
						<ul class="space-y-2">
							{#each technologies.frameworks as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Infrastructure -->
					<div>
						<h4
							class="text-lg font-medium mb-3 border-b border-green-200 dark:border-green-800 pb-1"
						>
							Infrastructure
						</h4>
						<ul class="space-y-2">
							{#each technologies.infrastructure as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
		class="max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-400"
		class:opacity-100={isVisible}
	>
		<div class="flex justify-center mb-12">
			<img src="/images/self.png" alt="Matt Henchey" class="rounded w-64 h-64 object-cover" />
		</div>

		<h2
			class="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent"
		>
			> introduction
		</h2>
		<div class="space-y-8">
			<div class="text-lg space-y-4">
				<h1 class="text-2xl font-semibold mb-4 text-orange-200">
					Matt Henchey => Software Engineer
				</h1>
				{#each aboutData.description as paragraph, i}
					{#if i === 0}
						<p class="opacity-90">{paragraph}</p>
					{:else if i === 1}
						<p class="opacity-85">{paragraph}</p>
					{:else if i === 2}
						<p class="opacity-80">{paragraph}</p>
					{/if}
				{/each}
			</div>

			<!-- Engineering Skills -->
			<div>
				<h3
					class="text-3xl font-bold mb-6
					bg-gradient-to-r from-orange-600 to-white
					bg-clip-text text-transparent"
				>
					engineering
				</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							backend
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each engineering.backend as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							data
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each engineering.data as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							cloud
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
					class="text-3xl font-bold mb-6
					bg-gradient-to-r from-orange-600 to-white
					bg-clip-text text-transparent"
				>
					leadership
				</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							technical
						</h4>
						<ul class="space-y-2 opacity-90">
							{#each leadership.technical as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							management
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
					class="text-3xl font-bold mb-6
					bg-gradient-to-r from-orange-600 to-white
					bg-clip-text text-transparent"
				>
					technologies
				</h3>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<!-- Databases -->
					<div>
						<h4
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							databases
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
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							languages
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
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							frameworks
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
							class="text-md font-bold mb-3 border-b border-orange-600 text-orange-600
						pb-1"
						>
							infrastructure
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

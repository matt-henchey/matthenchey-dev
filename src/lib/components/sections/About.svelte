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
		<div class="flex justify-left mb-12">
			<img src="/images/self.png" alt="Matt Henchey" class="rounded-full w-64 h-64 object-cover" />
		</div>

		<div class="space-y-8">
			<div class="text-lg space-y-4">
				<div class="flex gap-4 mb-1">
					<h2 class="text-xl font-semibold mb-4 text-green-500">Matt Henchey</h2>
					<h2 class="text-xl font-semibold mb-4 text-green-900">=></h2>
					<h2 class="text-xl font-semibold mb-4 text-green-500">Software Engineer</h2>
				</div>
			</div>

			<div class="flex gap-4 mb-2">
				<h1
					class="text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent"
				>
					> introduction
				</h1>
			</div>

			<div class="text-lg space-y-4">
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
					class="text-4xl font-semibold mb-6
					bg-gradient-to-r from-green-700 to-green-900
					bg-clip-text text-transparent"
				>
					engineering
				</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div>
						<ul class="space-y-2 opacity-90">
							{#each engineering.backend as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
						<ul class="space-y-2 opacity-90">
							{#each engineering.data as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
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
					class="text-4xl font-semibold mb-6
					bg-gradient-to-r from-green-700 to-green-900
					bg-clip-text text-transparent"
				>
					leadership
				</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<ul class="space-y-2 opacity-90">
							{#each leadership.technical as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div>
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
					class="text-4xl font-semibold mb-6
					bg-gradient-to-r from-green-700 to-green-900
					bg-clip-text text-transparent"
				>
					technologies
				</h3>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<!-- Databases -->
					<div>
						<ul class="space-y-2">
							{#each technologies.databases as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Languages -->
					<div>
						<ul class="space-y-2">
							{#each technologies.languages as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Frameworks -->
					<div>
						<ul class="space-y-2">
							{#each technologies.frameworks as tech}
								<li>{tech}</li>
							{/each}
						</ul>
					</div>

					<!-- Infrastructure -->
					<div>
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

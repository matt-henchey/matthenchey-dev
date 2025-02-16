<script lang="ts">
	import type { AboutSectionProps } from '$lib/types';
	import { aboutData } from '$lib/data/about';
	const {
		description,
		skills: { engineering, leadership, technologies }
	} = aboutData;

	export let onToggleContactBox: () => void;
	export let isVisible: boolean;
</script>

<section id="about" class="pt-32 pb-20 px-4 py-20 md:py-40 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-300 delay-100"
		class:opacity-100={isVisible}
	>
		<!-- Header -->
		<div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12">
			<!-- Image -->
			<img
				src="/images/self.png"
				alt="Matt Henchey"
				class="w-32 h-32 md:w-64 md:h-64 rounded-xl object-cover"
			/>
			<!-- Title -->
			<div class="flex flex-col -space-y-2 md:-space-y-8 text-center md:text-left">
				<h1
					class="text-5xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-green-200 to-green-900 bg-clip-text text-transparent leading-none pb-2"
				>
					software
				</h1>
				<h1
					class="text-5xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-green-200 to-green-900 bg-clip-text text-transparent leading-none pb-4"
				>
					engineer
				</h1>
			</div>
		</div>

		<!-- Name and Contact Button -->
		<div class="text-lg space-y-2 mb-8">
			<div class="flex flex-col md:flex-row items-center gap-2 mb-1">
				<h2 class="text-2xl font-bold text-green-500">Matt Henchey</h2>
				<h2 class="text-2xl text-green-900">=></h2>
				<!-- Contact Button -->
				<div class="p-2">
					<button
						on:click={onToggleContactBox}
						class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center
						transition-opacity duration-300 pulse"
					>
						send a message
					</button>
				</div>
			</div>
		</div>

		<!-- Introduction -->
		<div class="flex">
			<h1
				class="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent"
			>
				> introduction
			</h1>
		</div>

		<!-- Description -->
		<div class="text-lg space-y-4 mb-12 transition-opacity duration-300">
			{#each aboutData.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<!-- Skills Section -->
		<!-- Engineering Skills -->
		<div>
			<h3
				class="text-3xl md:text-4xl font-semibold mt-8 md:mt-16 mb-2 pb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				engineering
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
				class="text-3xl md:text-4xl font-semibold mt-8 md:mt-16 mb-2 pb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				leadership
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
		<div class="mt-8 md:mt-12">
			<h3
				class="text-3xl md:text-4xl font-semibold mb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				technologies
			</h3>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
				<!-- Databases -->
				<div>
					<ul class="space-y-2">
						{#each technologies.databases as tech}
							<li>
								<a
									href={tech.url}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center"
								>
									{tech.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Languages -->
				<div>
					<ul class="space-y-2">
						{#each technologies.languages as tech}
							<li>
								<a
									href={tech.url}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center"
								>
									{tech.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Frameworks -->
				<div>
					<ul class="space-y-2">
						{#each technologies.frameworks as tech}
							<li>
								<a
									href={tech.url}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center"
								>
									{tech.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Infrastructure -->
				<div>
					<ul class="space-y-2">
						{#each technologies.infrastructure as tech}
							<li>
								<a
									href={tech.url}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-green-500 transition-colors duration-200 border border-green-800 dark:border-green-500 rounded-md p-1 text-sm md:text-base min-w-[200px] inline-block text-center"
								>
									{tech.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes pulse-text {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.pulse {
		animation: pulse-text 3s ease-in-out infinite;
	}
</style>

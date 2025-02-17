<script lang="ts">
	import { skillsData } from '$lib/data/skills';
	const { skills } = skillsData;

	export let isVisible: boolean;
</script>

<section id="skills" class="pt-16 pb-10 px-4 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-300"
		class:opacity-100={isVisible}
	>
		<!-- Skills Section -->
		<!-- Engineering Skills -->
		<div>
			<h3
				class="text-3xl md:text-4xl font-semibold mt-2 md:mt-4 mb-2 pb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				engineering
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
				<div>
					<ul class="space-y-2 opacity-90">
						{#each skills.engineering.backend as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-2 opacity-90">
						{#each skills.engineering.data as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-2 opacity-90">
						{#each skills.engineering.cloud as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Leadership Skills -->
		<div>
			<h3
				class="text-3xl md:text-4xl font-semibold mt-2 md:mt-4 mb-2 pb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				leadership
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<div>
					<ul class="space-y-2 opacity-90">
						{#each skills.leadership.technical as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-2 opacity-90">
						{#each skills.leadership.management as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Technologies -->
		<div>
			<h3
				class="text-3xl md:text-4xl font-semibold mt-2 md:mt-4 mb-2 pb-2 bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent"
			>
				technologies
			</h3>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
				<!-- Databases -->
				<div>
					<ul class="space-y-2">
						{#each skills.technologies.databases as tech}
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
						{#each skills.technologies.languages as tech}
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
						{#each skills.technologies.frameworks as tech}
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
						{#each skills.technologies.infrastructure as tech}
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

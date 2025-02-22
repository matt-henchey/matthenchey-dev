<script lang="ts">
	import { skillsData } from '$lib/data/skills';
	const { skills } = skillsData;

	export let isVisible: boolean;
</script>

<section id="skills" class="pt-16 px-4 md:px-6">
	<div
		class="max-w-4xl mx-auto opacity-0 transition-all duration-300"
		class:opacity-100={isVisible}
	>
		<!-- Skills Section -->
		<!-- Header -->
		<div class="flex">
			<h1 class="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gradient-primary">
				> technical experience
			</h1>
		</div>
		<!-- Engineering Skills -->
		<!-- Technologies -->
		<div>
			<h2 class="text-xl md:text-2xl font-semibold text-gradient-secondary mb-4">.technologies</h2>

			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-4 border-b-2 border-[var(--color-yellow-500)]"
			>
				<!-- Databases -->
				<div>
					<ul class="space-y-2">
						{#each skills.technologies.databases as tech}
							<li>
								<a href={tech.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
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
								<a href={tech.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
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
								<a href={tech.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
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
								<a href={tech.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
									{tech.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<!-- Engineering Skills -->
		<div>
			<h2 class="text-xl md:text-2xl font-semibold text-gradient-secondary mb-4 mt-8">
				.engineering
			</h2>
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pb-4 border-b-2 border-[var(--color-yellow-500)]"
			>
				<div>
					<ul class="space-y-4 opacity-90">
						{#each skills.engineering.backend as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-4 opacity-90">
						{#each skills.engineering.data as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-4 opacity-90">
						{#each skills.engineering.cloud as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<!-- Leadership Skills -->
		<div>
			<h2 class="text-xl md:text-2xl font-semibold text-gradient-secondary mb-4 mt-8">
				.leadership
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				<div>
					<ul class="space-y-4 opacity-90">
						{#each skills.leadership.technical as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div>
					<ul class="space-y-4 opacity-90">
						{#each skills.leadership.management as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

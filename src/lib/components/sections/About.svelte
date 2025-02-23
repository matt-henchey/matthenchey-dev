<script lang="ts">
	import type { AboutSectionProps } from '$lib/types';
	import { aboutData } from '$lib/data/about';
	import { theme } from '$lib/stores/theme';
	import { ResumeFormat, downloadResume } from '$lib/services/resumeService';
	import ResumeDownloadButton from '$lib/components/ui/ResumeDownloadButton.svelte';
	const { description } = aboutData;

	export let onToggleContactBox: () => void;
	export let isVisible: boolean;
	let isDropdownOpen = false;
</script>

<section id="about" class="pt-16 pb-10 px-4 md:px-6">
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
				class="w-32 h-32 md:w-64 md:h-64 rounded-3xl object-cover"
			/>
			<!-- Title -->
			<div class="flex flex-col -space-y-2 md:-space-y-8 text-center md:text-left">
				<h1
					class="text-5xl md:text-9xl font-bold tracking-tighter text-gradient-header leading-tighter items-center justify-center pb-1"
				>
					software
				</h1>
				<h1
					class="text-5xl md:text-9xl font-bold tracking-tighter text-gradient-header leading-tighter pb-4 items-center justify-center"
				>
					engineer
				</h1>
			</div>
		</div>

		<!-- Name and Contact Button -->
		<div class="text-lg space-y-2 mb-8">
			<div class="flex flex-col md:flex-row items-center gap-2 mb-1">
				<h1 class="text-2xl font-bold text-gradient-secondary">Matt Henchey</h1>
				<h1 class="text-2xl font-bold text-gradient-secondary rotate-180">⬅</h1>
				<!-- Contact Button -->
				<div class="p-2">
					<button
						on:click={onToggleContactBox}
						class={`btn-primary ${$theme === 'dark' ? 'btn-primary-dark' : 'btn-primary'}`}
					>
						<span class="relative z-10"> send a message </span>
					</button>
					<ResumeDownloadButton />
				</div>
			</div>
		</div>

		<!-- Introduction -->
		<div class="flex">
			<h1 class="text-3xl md:text-5xl font-bold mb-4 text-gradient-primary">> introduction</h1>
		</div>

		<!-- Description -->
		<div class="text-lg space-y-4 mb-12 transition-opacity duration-300">
			{#each aboutData.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</section>

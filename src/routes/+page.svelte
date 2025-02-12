<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme';

	// UI Components
	import Splash from '$lib/components/ui/Splash.svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import ExitButton from '$lib/components/ui/ExitButton.svelte';

	// Layout Components
	import Navigation from '$lib/components/layout/Navigation.svelte';

	// Section Components
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Education from '$lib/components/sections/Education.svelte';

	// State management
	let isFirstLoad = true;
	let isTransitioning = false;
	let showContent = false;
	let mounted = false;

	onMount(() => {
		console.log('onMount called');
		if (browser) {
			console.log('browser is true');
			mounted = true;
			const hasVisited = localStorage.getItem('hasVisited');
			console.log('hasVisited:', hasVisited);
			console.log('initial states:', { isFirstLoad, isTransitioning, showContent, mounted });
			if (hasVisited) {
				isFirstLoad = false;
				showContent = true;
				console.log('after hasVisited check:', { isFirstLoad, showContent });
			}
		}
	});

	function handleEnter() {
		console.log('handleEnter called');
		isTransitioning = true;
		if (browser) {
			console.log('browser is true');
			localStorage.setItem('hasVisited', 'true');
		}

		setTimeout(() => {
			console.log('setTimeout showContent true called');
			showContent = true;
			setTimeout(() => {
				console.log('setTimeout isTransitioning false called');
				isTransitioning = false;
			}, 50);
		}, 1000);
	}

	function handleExit() {
		console.log('handleExit called');
		isTransitioning = true;

		setTimeout(() => {
			console.log('timeout in handleExit');
			localStorage.removeItem('hasVisited');
			showContent = false;
			isTransitioning = false;
		}, 1000);
	}

	$: if (browser) {
		console.log('State changed:', { isFirstLoad, isTransitioning, showContent, mounted });
		document.body.className = $theme;
	}
</script>

<svelte:head>
	<title>Matt Henchey | Software Engineer</title>
	<meta
		name="description"
		content="Software engineer specializing in data-intensive applications"
	/>
</svelte:head>

{#if mounted}
	{#if !showContent}
		<div class="fixed inset-0 bg-white dark:bg-[#111111] z-50">
			<Splash {isFirstLoad} {isTransitioning} onEnter={handleEnter} />
		</div>
	{:else}
		<div
			class="min-h-screen
  bg-[#F5F5F5] dark:bg-[#111111]
  text-[#111111] dark:text-[#F5F5F5]
  transition-all duration-1000
  {isTransitioning ? 'opacity-0 blur-lg' : 'opacity-100 blur-0'}"
		>
			<Navigation isVisible={showContent} />
			<ThemeToggle />
			<ExitButton onExit={handleExit} />

			<main>
				<Hero isVisible={!isTransitioning} />
				<About isVisible={!isTransitioning} />
				<Experience isVisible={!isTransitioning} />
				<Education isVisible={!isTransitioning} />
			</main>
		</div>
	{/if}
{/if}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		transition: background-color 0.3s ease-in-out;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme';

	// UI Components
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import HamburgerMenu from '$lib/components/ui/HamburgerMenu.svelte';
	import ContactBox from '$lib/components/ui/ContactBox.svelte';

	// Section Components
	import Header from '$lib/components/layout/Header.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	// State management
	let isFirstLoad = true;
	let isTransitioning = false;
	let showContent = false;
	let mounted = false;
	let isContactBoxVisible = false;

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

	function toggleContactBox() {
		isContactBoxVisible = !isContactBoxVisible;
	}

	function closeContactBox() {
		isContactBoxVisible = false;
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
	<div
		class="min-h-screen
  bg-[#F5F5F5] dark:bg-[#111111]
  text-[#111111] dark:text-[#F5F5F5]
  transition-all duration-300
  {isTransitioning ? 'opacity-0 blur-lg' : 'opacity-100 blur-0'}"
	>
		<Header isVisible={true}>
			<ThemeToggle slot="theme-toggle" />
			<HamburgerMenu slot="hamburger-menu" />
		</Header>
		<main>
			<About isVisible={!isTransitioning} onToggleContactBox={toggleContactBox} />
			<Experience isVisible={!isTransitioning} />
			<Skills isVisible={!isTransitioning} />
			<Education isVisible={!isTransitioning} />
		</main>

		<Footer />
	</div>
{/if}

{#if isContactBoxVisible}
	<div
		class="fixed inset-0 bg-black/50 z-50 transition-all duration-300"
		class:opacity-0={!isContactBoxVisible}
		class:opacity-100={isContactBoxVisible}
		class:pointer-events-none={!isContactBoxVisible}
	>
		<ContactBox isVisible={isContactBoxVisible} onClose={closeContactBox} />
	</div>
{/if}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(html),
	:global(body.dark) {
		background-color: #111111;
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

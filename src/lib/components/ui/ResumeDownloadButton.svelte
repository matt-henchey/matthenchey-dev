<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { downloadResume, ResumeFormat } from '$lib/services/resumeService';

	let isDropdownOpen = false;

	const handleDownload = (format: ResumeFormat) => {
		downloadResume(format);
		isDropdownOpen = false;
	};
</script>

<div class="relative inline-block">
	<button
		on:click={() => (isDropdownOpen = !isDropdownOpen)}
		class={`btn-primary ${$theme === 'dark' ? 'btn-primary-dark' : 'btn-primary'}`}
	>
		<span class="relative z-10">download resume</span>
	</button>

	{#if isDropdownOpen}
		<div
			class="absolute mt-2 py-2 min-w-[200px] bg-white dark:bg-[var(--color-dark-gray-800)] rounded-lg shadow-xl"
			on:mouseleave={() => (isDropdownOpen = false)}
			role="menu"
			aria-label="Download Resume"
			tabindex="-1"
		>
			<button
				class="block px-4 py-2 text-sm
                text-[var(--color-dark-gray-700)]
                dark:text-[var(--color-dark-gray-200)]
                hover:text-[var(--color-dark-gray-900)]
                dark:hover:text-[var(--color-yellow-200)]
                hover:bg-[var(--color-dark-gray-200)]
                dark:hover:bg-[var(--color-dark-gray-900)]
                w-full text-left"
				on:click={() => handleDownload(ResumeFormat.MARKDOWN)}
				role="menuitem"
			>
				markdown (.md)
			</button>
			<button
				class="block px-4 py-2 text-sm
                text-[var(--color-dark-gray-700)]
                dark:text-[var(--color-dark-gray-200)]
                hover:text-[var(--color-dark-gray-900)]
                dark:hover:text-[var(--color-yellow-200)]
                hover:bg-[var(--color-dark-gray-200)]
                dark:hover:bg-[var(--color-dark-gray-900)]
                w-full text-left"
				on:click={() => handleDownload(ResumeFormat.PLAINTEXT)}
				role="menuitem"
			>
				plain text (.txt)
			</button>
			<button
				class="block px-4 py-2 text-sm
                text-[var(--color-dark-gray-700)]
                dark:text-[var(--color-dark-gray-200)]
                hover:text-[var(--color-dark-gray-900)]
                dark:hover:text-[var(--color-yellow-200)]
                hover:bg-[var(--color-dark-gray-200)]
                dark:hover:bg-[var(--color-dark-gray-900)]
                w-full text-left"
				on:click={() => handleDownload(ResumeFormat.DOCX)}
				role="menuitem"
			>
				docx (.docx)
			</button>
		</div>
	{/if}
</div>

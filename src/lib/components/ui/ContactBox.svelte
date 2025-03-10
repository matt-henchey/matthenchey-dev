<!-- matthenchey-dev/src/lib/components/ui/ContactBox.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	export let isVisible: boolean;
	export let onClose: () => void;

	let email = '';
	let subject = '';
	let message = '';

	// load saved draft from local storage
	onMount(() => {
		const savedDraft = localStorage.getItem('contactDraft');
		if (savedDraft) {
			const draft = JSON.parse(savedDraft);
			email = draft.email || '';
			subject = draft.subject || '';
			message = draft.message || '';
		}
	});

	// save draft to local storage
	$: {
		if (email || subject || message) {
			localStorage.setItem('contactDraft', JSON.stringify({ email, subject, message }));
		}
	}

	async function handleSubmit() {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, subject, message })
			});

			if (response.ok) {
				localStorage.removeItem('contactDraft');
				email = subject = message = '';
				alert('Message sent successfully!');
				onClose();
			} else {
				const errorData = await response.json();
				alert('Failed to send message: ' + errorData.error);
			}
		} catch (error) {
			console.error('Error sending message:', error);
			alert('An error occurred while sending the message.');
		}
	}

	async function handleCancel() {
		onClose();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			isVisible = false;
		}
	}
</script>

{#if isVisible}
	<div
		class="fixed inset-0 bg-[#111111]/30 z-50 flex items-center justify-center transition-all duration-300"
		role="dialog"
		aria-modal="true"
		aria-label="Contact Form"
	>
		<div
			class="dark:bg-[#171717] bg-green-200 p-6 rounded-3xl shadow-lg max-w-md w-full mx-4 border border-4 border-black"
		>
			<h2
				class="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-100"
			>
				> contact
			</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label for="email" class="block text-sm font-bold text-gray-700">email</label>
					<input
						type="email"
						id="email"
						bind:value={email}
						required
						class="mt-1
                        block
                        w-full
                        border
						border-1
						hover:border-2
                        border-black
                        rounded-sm
                        hover:shadow-lg
                        shadow-sm
						p-2
                        bg-green-300
                        dark:bg-[#1F1F1F]

                        text-gray-600
                        dark:text-green-900

                        focus:text-green-900
                        dark:focus:text-green-200

                        focus:bg-green-400
                        dark:focus:bg-[#0D0D0D]

                        focus:outline-none
                        dark:focus:outline-none

                        focus:border-gray-900
                        dark:focus:border-gray-900

                        focus:ring-0
                        dark:focus:ring-0

                        focus:ring-gray-900
                        dark:focus:ring-gray-900

                        sm:text-sm
                        transition-color
                        duration-300"
					/>
				</div>
				<div class="mb-4">
					<label for="subject" class="block text-sm font-bold text-gray-700">tldr</label>
					<input
						type="text"
						id="subject"
						bind:value={subject}
						required
						class="mt-1
                        block
                        w-full
                        border
						border-1
						hover:border-2
                        border-black
                        rounded-sm
                        hover:shadow-lg
                        shadow-sm
						p-2
                        bg-green-300
                        dark:bg-[#1F1F1F]

                        text-gray-600
                        dark:text-green-900

                        focus:text-green-900
                        dark:focus:text-green-200

                        focus:bg-green-400
                        dark:focus:bg-[#0D0D0D]

                        focus:outline-none
                        dark:focus:outline-none

                        focus:border-gray-900
                        dark:focus:border-gray-900

                        focus:ring-0
                        dark:focus:ring-0

                        focus:ring-gray-900
                        dark:focus:ring-gray-900

                        sm:text-sm
                        transition-color
                        duration-300"
					/>
				</div>
				<div class="mb-4">
					<label for="message" class="block text-sm font-bold text-gray-700">msg</label>
					<textarea
						id="message"
						bind:value={message}
						required
						class="mt-1
                        block
                        w-full
                        border
						border-1
						hover:border-2
                        border-black
                        rounded-sm
                        hover:shadow-lg
                        shadow-sm
						p-2
                        bg-green-300
                        dark:bg-[#1F1F1F]

                        text-gray-600
                        dark:text-green-900

                        focus:text-green-900
                        dark:focus:text-green-200

                        focus:bg-green-400
                        dark:focus:bg-[#0D0D0D]

                        focus:outline-none
                        dark:focus:outline-none

                        focus:border-gray-900
                        dark:focus:border-gray-900

                        focus:ring-0
                        dark:focus:ring-0

                        focus:ring-gray-900
                        dark:focus:ring-gray-900

                        sm:text-sm
                        transition-color
                        duration-300"
						rows="4"
					></textarea>
				</div>
				<div class="flex justify-end">
					<button
						type="button"
						on:click={handleCancel}
						class="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#1F1F1F] bg-gray-600 hover:bg-gray-700 border border-gray-900 focus:outline-1 focus:ring-1 focus:ring-[#1F1F1F]"
					>
						Cancel
					</button>
					<button
						type="submit"
						class="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-[#1F1F1F] bg-green-600 hover:bg-green-700 focus:outline-1 focus:ring-1 focus:ring-[#1F1F1F]"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

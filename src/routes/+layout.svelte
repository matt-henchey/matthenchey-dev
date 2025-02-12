<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
</script>

<div
	class="min-h-screen bg-green-50 dark:bg-[#121212] text-[#1C1917] dark:text-green-50 transition-all duration-300"
>
	<slot />
</div>

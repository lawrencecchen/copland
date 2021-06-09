<script lang="ts">
	import { slide } from 'svelte/transition';
	export let checked = false;
	export let size = 20;

</script>

<button
	style="--size: {size}px"
	class="{checked
		? 'bg-indigo-600 bg-opacity-100'
		: 'bg-gray-300'} relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
	role="switch"
	tabindex="0"
	aria-checked={checked}
	on:click={() => (checked = !checked)}
>
	<span class="sr-only">Use setting</span>
	<span
		aria-hidden="true"
		transition:slide
		class="ball {checked ? 'active' : 'translate-x-0'}
       pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition duration-200"
		style=""
	/>
</button>

<style>
	button {
		height: calc(var(--size) + 4px);
		width: calc(var(--size) * 2 + 6px);
	}
	.ball {
		width: var(--size);
		height: var(--size);
	}
	.active {
		transform: translateX(calc(var(--size) + 2px));
	}

</style>

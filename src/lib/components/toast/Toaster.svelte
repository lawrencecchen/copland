<script lang="ts" context="module">
	export const toasts = writable([]);
	import { flip } from 'svelte/animate';
	let uid = 0;

	export function toast(text: string, timeout: number = 2000) {
		let id = uid++;
		toasts.update((toasts) => [{ text: text, id }, ...toasts]);

		setTimeout(() => {
			toasts.update((toasts) => toasts.filter((toast) => toast.id! !== id));
		}, timeout);
	}

</script>

<script>
	import { writable } from 'svelte/store';

	import Toast from './Toast.svelte';

	// $: console.log($toasts);

</script>

<div class="absolute inset-4 pointer-events-none">
	<div class="absolute top-0 right-0 space-y-2">
		{#each $toasts as { text, id } (id)}
			<div animate:flip={{ duration: 400 }}>
				<Toast {text} {id} />
			</div>
		{/each}
	</div>
</div>

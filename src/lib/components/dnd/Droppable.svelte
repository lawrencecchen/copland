<script lang="ts">
	import { setContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import { key } from './dnd';

	export let draggables: Writable<any[]>;

	const draggablesEl = writable<HTMLElement[]>([]);

	setContext(key, {
		getDraggables: () => draggables,
		getDraggablesEl: () => draggablesEl
	});

	// $: console.log($draggablesEl);

	function swap() {
		[$draggables[0], $draggables[1]] = [$draggables[1], $draggables[0]];
		// const first = $draggables.shift();
		// console.log($draggables);
		// $draggables = [...$draggables, first];
	}

	function getOffsets() {
		for (const draggable of $draggablesEl) {
			console.log(draggable.offsetTop, draggable.getAttribute('data-draggable-id'));
		}
	}

</script>

<button on:click={swap}>[swap]</button>
<button on:click={getOffsets}>[get offsets]</button>
<div class="border-dotted border-4 p-1 m-3">
	<slot />
</div>

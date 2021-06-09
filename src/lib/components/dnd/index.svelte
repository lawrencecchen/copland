<script>
	import Draggable from '$lib/components/dnd/Draggable.svelte';
	import Droppable from '$lib/components/dnd/Droppable.svelte';
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	let uid = 1;

	let draggables = writable([
		{ id: uid++, value: 'write some docs' },
		{ id: uid++, value: 'start writing' },
		{ id: uid++, value: 'buy some milk' },
		{ id: uid++, value: 'mow the lawn' },
		{ id: uid++, value: 'feed the turtle' },
		{ id: uid++, value: 'fix some bugs' }
	]);

</script>

<div class="max-w-sm">
	<Droppable bind:draggables>
		{#each $draggables as { id, value }, index (id)}
			<div animate:flip={{ duration: 125 }}>
				<Draggable {id} {index}>{value}</Draggable>
			</div>
		{/each}
	</Droppable>
</div>

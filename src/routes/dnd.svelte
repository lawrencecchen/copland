<script>
	import Draggable from '$lib/components/dnd2/Draggable.svelte';
	import { writable } from 'svelte/store';

	let uid = 0;
	let items = writable([
		{ id: uid++, value: 'The Education of Alan Turing' },
		{ id: uid++, value: 'Machines at Work' },
		{ id: uid++, value: 'Addition and Multiplication' },
		{ id: uid++, value: 'Also Known as Subroutines' },
		{ id: uid++, value: 'Everything Is a Number' },
		{ id: uid++, value: 'The Universal Machine' },
		{ id: uid++, value: 'Computers and Computability' },
		{ id: uid++, value: 'Of Machines and Men' }
	]);

</script>

<div class="border-dotted border-4 p-1 m-3">
	{#each $items as { id, value } (id)}
		<Draggable {id}>{value}</Draggable>
	{/each}
</div>

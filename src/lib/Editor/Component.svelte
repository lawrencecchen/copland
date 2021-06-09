<script lang="ts">
	import { slide } from 'svelte/transition';
	import { componentOverlays, createComponentOverlay } from './overlays.store';
	import uuid from './uuid';
	let component: HTMLDivElement;

	const id = uuid();

	function mouseenter() {
		const { offsetLeft: x, offsetTop: y, offsetWidth: width, offsetHeight: height } = component;
		$componentOverlays = [
			...$componentOverlays,
			createComponentOverlay({ name: 'div', height, width, x, y, id })
		];
	}
	let colSpan = 3;
	function click() {
		colSpan += 1;
	}

</script>

<!-- <button on:click={click}>hi</button> -->
<div
	class="p-4 rounded-md border shadow-xl relative z-10"
	style="grid-column: span {colSpan} / span {colSpan};"
	on:mouseenter={mouseenter}
	transition:slide
	bind:this={component}
>
	<h2 class="font-semibold text-lg">Hello, world!</h2>
	<button class="mt-2 p-2 text-xs border rounded shadow-sm">I'm a button</button>
</div>

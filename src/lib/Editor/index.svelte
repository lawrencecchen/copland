<script lang="ts">
	import Toggle from '$lib/components/toggle/Toggle.svelte';
	import Component from './Component.svelte';
	import Overlay from './Overlay.svelte';
	import { createGridOverlay, gridOverlays } from './overlays.store';
	let editor: HTMLDivElement = null;

	// function showGrid() {
	// 	const context = setupCanvas($canvasEl);
	// 	const { gridTemplateColumns, gridTemplateRows, rowGap, columnGap } = window.getComputedStyle(
	// 		editor
	// 	);
	// 	console.log({ gridTemplateColumns, gridTemplateRows, rowGap, columnGap });
	// 	let xPos = 0;
	// 	for (const x of gridTemplateColumns.split(' ')) {
	// 		let yPos = 0;
	// 		for (const y of gridTemplateRows.split(' ')) {
	// 			context.fillStyle = 'rgba(156, 163, 175)';
	// 			context.fillRect(xPos, yPos, 2, 2);
	// 			yPos += parseFloat(y) + parseFloat(rowGap);
	// 		}
	// 		xPos += parseFloat(x) + parseFloat(columnGap);
	// 	}
	// }
	// function hideGrid() {
	// 	const context = setupCanvas($canvasEl);

	// 	context.clearRect(0, 0, $canvasEl.width, $canvasEl.height);
	// }
	import uuid from './uuid';
	const id = uuid();
	let h: number;
	let w: number;
	let showGrid = false;
	$: {
		if (showGrid) {
			$gridOverlays = [...$gridOverlays, createGridOverlay(editor, id)];
			// console.log(createGridOverlay(editor, id));
		} else {
			$gridOverlays = $gridOverlays.filter((overlay) => overlay.id !== id);
		}
	}

</script>

<div class="h-screen flex flex-col p-10">
	<div class="p-2">
		<Toggle bind:checked={showGrid} />
	</div>

	<div class="relative flex-grow border-4 border-dotted">
		<div
			class="flex-grow grid gap-4 grid-cols-12 grid-rows-4 relative z-0"
			bind:this={editor}
			bind:clientWidth={w}
			bind:clientHeight={h}
		>
			<Component />
			<!-- <Component /> -->
			<!-- <Component /> -->
			<Overlay />
		</div>
	</div>
</div>

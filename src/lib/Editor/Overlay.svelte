<script lang="ts">
	import { fade } from 'svelte/transition';
	import GridDotted from './GridDotted.svelte';
	import { componentOverlays, gridOverlays } from './overlays.store';

	function removeOverlay(id) {
		$componentOverlays = $componentOverlays.filter((overlay) => overlay.id !== id);
	}
	const margin = 0;

</script>

<div class="absolute z-10 pointer-events-none">
	{#each $componentOverlays as { height, width, name, x, y, id }}
		<div
			style="width: {width + margin}px; height: {height + margin}px; transform: translate({x -
				margin / 2}px, {y - margin / 2}px);"
			class="absolute border border-indigo-500 pointer-events-auto"
			on:mouseleave={() => removeOverlay(id)}
			transition:fade={{ duration: 75 }}
		>
			<div
				class="absolute bg-indigo-500 text-white text-xs inline-block px-1 cursor-move select-none"
			>
				{name}
			</div>
		</div>
	{/each}

	{#each $gridOverlays as { gridTemplateColumns, gridTemplateRows, columnGap, rowGap, x, y, width, height }}
		<div
			style="width: {width}px; height: {height}px; transform: translate({x}px, {y}px);"
			class="absolute border border-indigo-500 pointer-events-auto"
			transition:fade={{ duration: 75 }}
		>
			<div
				class="absolute bg-indigo-500 text-white text-xs inline-block px-1 cursor-move select-none"
			>
				Grid
			</div>
			<GridDotted {gridTemplateColumns} {gridTemplateRows} {columnGap} {rowGap} {width} {height} />
		</div>
	{/each}
</div>

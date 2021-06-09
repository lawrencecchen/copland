<script lang="ts">
	import { onMount } from 'svelte';

	export let gridTemplateColumns: string;
	export let gridTemplateRows: string;
	export let columnGap: string;
	export let rowGap: string;
	export let width: number;
	export let height: number;

	let canvasEl: HTMLCanvasElement;

	function setupCanvas(canvas) {
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		const ctx = canvas.getContext('2d');
		ctx.scale(dpr, dpr);

		return ctx;
	}

	onMount(() => {
		const context = setupCanvas(canvasEl);

		console.log({ gridTemplateColumns, gridTemplateRows, columnGap, rowGap });
		let xPos = 0;
		for (const x of gridTemplateColumns.split(' ')) {
			let yPos = 0;
			for (const y of gridTemplateRows.split(' ')) {
				context.fillStyle = 'rgba(156, 163, 175)';
				context.fillRect(xPos, yPos, 2, 2);
				yPos += parseFloat(y) + parseFloat(rowGap);
			}
			xPos += parseFloat(x) + parseFloat(columnGap);
		}
	});

</script>

<canvas class="w-full h-full" bind:this={canvasEl} width={width * 2} height={height * 2} />

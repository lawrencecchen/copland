<script lang="ts">
	import { onMount } from 'svelte';

	export let value = '';
	export let defaultValue = '';

	let inputEl: HTMLInputElement;
	let className = '';
	// export { className as class };

	function getTextWidth(text, font) {
		// re-use canvas object for better performance
		// @ts-ignore
		const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
		const context = canvas.getContext('2d');
		context.font = font;
		const metrics = context.measureText(text);
		return metrics.width;
	}

	$: hasEdited = value !== defaultValue;
	let width;
	let font;
	onMount(() => {
		value = defaultValue;
		font = window.getComputedStyle(inputEl).font;
	});
	$: width = value && getTextWidth(value, font);
	$: console.log(width);

	// function input(e) {
	// 	// const {fontWeight, fontFamily} = e.target.style
	// 	const { font } = window.getComputedStyle(e.target);
	// 	console.log(e.target.value, getTextWidth(e.target.value, font));
	// }

	function click() {
		inputEl.select();
		// if (!hasEdited) {
		// 	value = defaultValue;
		// }
	}

</script>

{hasEdited}
<div>
	<div class="px-2 py-1">
		<input
			type="text"
			bind:this={inputEl}
			style="width: {width}px;"
			class="text-lg px-2 py-1 border rounded-sm {hasEdited
				? 'text-black'
				: 'text-gray-500'} border-transparent hover:border-gray-300 focus:hover:border-blue-500 focus:ring-1 ring-blue-500 cursor-text"
			bind:value
			on:click={click}
		/>
	</div>
</div>

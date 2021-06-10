<script lang="ts">
	import { pannable } from './pannable';
	import { quintOut } from 'svelte/easing';
	import { spring } from 'svelte/motion';
	import { crossfade } from 'svelte/transition';
	import { getContext, onMount } from 'svelte';
	import { key } from './dnd';

	export let id;
	export let index;

	const { getDraggables, getDraggablesEl } = getContext(key);
	const draggables = getDraggables();
	const draggablesEl = getDraggablesEl();
	let currentEl: HTMLElement;

	onMount(() => {
		$draggablesEl = [...$draggablesEl, currentEl];
	});

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
	let isGrabbing = false;
	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.7,
			damping: 0.8
		}
	);

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(e) {
		const index = $draggablesEl.indexOf(currentEl);
		const nextElement = $draggablesEl[index + 1] ?? null;
		const prevElement = $draggablesEl[index - 1] ?? null;

		const { y } = currentEl.getBoundingClientRect();
		const passedNextElement =
			nextElement && y > nextElement.offsetTop - nextElement.offsetHeight / 2;
		const passedPrevElement =
			prevElement && y < prevElement.offsetTop + prevElement.offsetHeight / 2;

		console.log(y);
		if (passedNextElement) {
			[$draggables[index], $draggables[index + 1]] = [$draggables[index + 1], $draggables[index]];

			[$draggablesEl[index], $draggablesEl[index + 1]] = [
				$draggablesEl[index + 1],
				$draggablesEl[index]
			];
		}
		// if (passedPrevElement) {
		// 	[$draggables[index], $draggables[index - 1]] = [$draggables[index - 1], $draggables[index]];

		// 	[$draggablesEl[index], $draggablesEl[index - 1]] = [
		// 		$draggablesEl[index - 1],
		// 		$draggablesEl[index]
		// 	];
		// }

		coords.update(($coords) => ({
			x: $coords.x + e.detail.dx,
			y: $coords.y + e.detail.dy
		}));
	}

	function handlePanEnd() {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
		isGrabbing = false;
	}

	function remove() {
		$draggables = $draggables.filter((item) => item.id !== id);
	}

</script>

<div
	class="w-full h-10 mb-2 flex items-center justify-center bg-white border-dotted border-2 relative transition-shadow {isGrabbing
		? 'z-10 shadow-lg bg-green-50'
		: ''}"
	style="transform: translate({$coords.x}px,{$coords.y}px);"
	bind:this={currentEl}
	data-draggable-id={id}
	in:receive={{ key: id }}
	out:send={{ key: id }}
>
	<button
		class="p-2 {isGrabbing ? 'cursor-grabbing select-none' : 'cursor-grab'}"
		use:pannable
		on:panmove={handlePanMove}
		on:panstart={handlePanStart}
		on:panend={handlePanEnd}
		on:mousedown={() => (isGrabbing = true)}
	>
		<svg class="w-3 h-3 text-gray-400" viewBox="0 0 10 10" fill="currentColor">
			<path
				d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"
			/>
		</svg>
	</button>

	<div class="flex-grow ml-2">
		{index + 1}
		<slot />
	</div>
	<button class="delete" on:click={remove}>delete</button>
</div>

<style>
	.delete {
		position: absolute;
		top: 0;
		right: 0.2em;
		width: 2em;
		height: 100%;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.4em 1.4em;
		border: none;
		opacity: 0;
		transition: opacity 0.2s;
		text-indent: -9999px;
		cursor: pointer;
	}
	div:hover .delete {
		opacity: 1;
	}

</style>

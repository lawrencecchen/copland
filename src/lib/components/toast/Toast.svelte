<script lang="ts">
	import { quintInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	export let text = '';
	export let id;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintInOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

</script>

<div
	class="px-4 py-2 rounded-xl filter drop-shadow-lg border grid place-items-center bg-white"
	in:receive={{ key: id, duration: 100 }}
	out:send={{ key: id, duration: 100 }}
>
	{text}
</div>

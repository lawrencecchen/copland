<script lang="ts">
	import Avatar from './Avatar.svelte';

	export let size = 30;
	export let overlap = 7;

	interface Member {
		src: string;
		username: string;
	}
	export let members: Member[];
	export let limit = members.length;

</script>

<div class="flex items-center text-sm font-light text-gray-700" style="--overlap: {overlap}px">
	{#each members.slice(0, limit) as { src, username }, i}
		<span style="--order: {i}">
			<Avatar {src} {username} {size} />
		</span>
	{/each}
	{#if limit < members.length}
		+{members.length - limit}
	{/if}
</div>

<style>
	div span:nth-child(n + 2) {
		transform: translateX(calc(-1 * var(--overlap) * var(--order)));
	}

</style>

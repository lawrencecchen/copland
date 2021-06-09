<script>
	import AvatarGroup from '$lib/components/avatar/AvatarGroup.svelte';
	import DragAndDrop from '$lib/components/dnd/index.svelte';
	import Toggle from '$lib/components/toggle/Toggle.svelte';

	let checked = false;
	let members = [
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' },
		{ username: 'evilrabbit', src: 'https://vercel.com/api/www/avatar/?u=evilrabbit&amp;s=48' }
	];

</script>

<div class="p-5">
	<Toggle {checked} />
	<AvatarGroup {members} />
	<DragAndDrop />
</div>

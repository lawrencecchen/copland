<script>
	import AvatarGroup from '$lib/components/avatar/AvatarGroup.svelte';
	import DragAndDrop from '$lib/components/dnd/index.svelte';
	import Editable from '$lib/components/editable/Editable.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import Toaster from '$lib/components/toast/Toaster.svelte';
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
	<!-- <div class="pb-2">
		<Editable defaultValue="Untitled document" />
	</div>
	<Toggle {checked} />
	<AvatarGroup {members} /> -->
	<DragAndDrop />
	<!-- <Select /> -->
	<Toaster />
</div>

<script lang="ts">
	export let size = 30;
	export let src: string;
	export let username: string;

</script>

<img
	width={size}
	height={size}
	async={true}
	decoding="async"
	loading="lazy"
	alt="Avatar for {username}"
	title="Avatar for {username}"
	{src}
	class="rounded-full border shadow"
/>

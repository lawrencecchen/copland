<script>
	import Toaster, { toast } from '$lib/components/toast/Toaster.svelte';

</script>

<div class="p-5">
	<button on:click={() => toast(`What's up!`)}>It's a toast!</button>
	<Toaster />
</div>

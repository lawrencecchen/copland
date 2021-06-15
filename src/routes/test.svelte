<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch, session, context }) => {
		return {
			props: {
				test: 'wassup'
			}
		};
	};

</script>

<script lang="ts">
	export let test;
	console.log(test);

</script>

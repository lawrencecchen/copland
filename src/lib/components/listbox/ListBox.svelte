<script lang="ts">
	// import { timezones, i18n } from './timezones';

	// const options = timezones
	// 	.map((timezone) => {
	// 		const d = new Date();
	// 		const local = d.toLocaleString('en-US', { timeZone: timezone, timeZoneName: 'long' });
	// 		const regex = new RegExp(/[^ ]*$/g);
	// 		const offset = regex.exec(local)[0];
	// 		return { name: timezone, local, timezone: offset };
	// 	})
	// 	.sort((a: any, b: any) => (a.local > b.local ? 1 : -1));
	// console.log(options);

	// const _t = (s) => {
	// 	if (i18n !== void 0 && i18n[s]) {
	// 		return i18n[s];
	// 	}

	// 	return s;
	// };

	// export let options = []

</script>

<button
	class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
>
	<span class="block truncate">Elon Musk</span>
	<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
		<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path
				fill-rule="evenodd"
				d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>
</button>

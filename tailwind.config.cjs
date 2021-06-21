const colors = require('tailwindcss/colors');
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal
			},
			cursor: {
				grab: 'grab',
				grabbing: 'grabbing'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};

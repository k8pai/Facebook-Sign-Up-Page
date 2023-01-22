/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
	  extend: {
		colors: {
			bdbg: '#f0f8fb',
			sgbtn: '#00a400',
			hvrState: '#1c930f',
			gray: 'gray',
			black: 'black',
		}
	  },
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors:{
		  'fondo' : '#fff',
		  'fondo-boton' : '#1f1f1f',
		  'fondo-secundario' : '#f9fafb',
		  'text-gray' : '#6b6b6b',
		},
		screens: {
		  'desktop': '900px',
		  'semi-desktop': '890px'
  
		},
		fontFamily:{
		  montserrat: ['Montserrat', 'sans-serif'],
		},
		boxShadow:{
		  'shadow-picture': '0px 20px 0px 10px rgba(230,230,230,1);'
		}
	  },
	},
	plugins: [],
  }
  
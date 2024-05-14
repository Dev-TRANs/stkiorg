/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh', '100dvh']
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				ZenOldMincho: ['Zen Old Mincho', 'serif'],
				CourierPrime: ['Courier Prime', 'monospace'],
				AllertaStencil: ['Allerta Stencil', 'sans-serif'],
				NotoSansJP:['Noto Sans JP', 'sans-serif'],
			},
			keyframes: {
				increase: {
					'0%': { height: '0%' },
					'100%': { height: '100%' },
				}
			},
			animation: {
				increase: "increase 1.5s"
			},
			fontSize: {
				xxs: ['0.4375rem', '0.625rem']
			}
		},
	},
	plugins: [
	],
}

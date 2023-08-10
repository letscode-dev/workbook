import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';

import { NAV, SIDEBAR } from './builder';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	base: '/workbook/',
	title: 'Let\'s Code Workbook',
	head: [
		['link', { rel: 'icon', href: '/favicon.svg' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],
	theme: defaultTheme({
		navbar: NAV,
		sidebar: SIDEBAR,
	}),
	plugins: [
		'@vuepress/plugin-medium-zoom',
		registerComponentsPlugin({
			components: {
				['v-details']: path.resolve(__dirname, './components/v-details.vue'),
				['v-iframe']: path.resolve(__dirname, './components/v-iframe.vue'),
				['v-padding']: path.resolve(__dirname, './components/v-padding.vue'),
				['v-two']: path.resolve(__dirname, './components/v-two.vue'),
			},
		}),
		// docsearchPlugin({
		// 	// options
		// }),
	]
})

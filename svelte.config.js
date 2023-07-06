import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		alias: {
			$app: 'src',
			$assets: 'src/assets'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
		}

	}
};

export default config;
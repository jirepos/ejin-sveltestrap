import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// a11y 경고 막기
	onwarn: (warning, handler) => {
		if(warning.code.startsWith('a11y-')) return
		if(warning.code === 'css-unused-selector') return;
		if(warning.code === 'a11y-click-events-have-key-events') return;
    if(warning.code === 'a11y-no-noninteractive-element-interactions') return;
		if(warning.code === 'a11y-no-static-element-interactions') return;
		if(warning.code === 'a11y-media-has-caption')	return;
		handler(warning);	
	},	
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

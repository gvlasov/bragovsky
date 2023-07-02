import '../app.scss'
import "the-new-css-reset/css/reset.css";
import '../lib/i18n'
import {waitLocale} from 'svelte-i18n'

export const load = async () => {
    // if (browser) {
    //     locale.set(window.navigator.language)
    // }
    await waitLocale()
}
export const prerender = true
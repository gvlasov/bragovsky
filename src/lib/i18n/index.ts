import {init, register} from 'svelte-i18n'
import {translitLocaleToEng } from "./translit";

const ru:  Promise<any> = import('./ru/common.json')
register('ru', () => ru)
register('en', () => ru.then(l => translitLocaleToEng(l)))

init({
    fallbackLocale: 'ru',
    initialLocale: 'ru',
})
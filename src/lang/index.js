// import { createI18n } from 'vue-i18n'
// import ru from './ru.json'
// import en from './en.json'

// const i18n = createI18n({
//     legacy: false,
//     locale: import.meta.env.VITE_I18N_LOCALE || 'en',
//     fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ru',
//     messages: {
//         en,
//         ru,
//     }
// })

// export default i18n

import { createI18n } from 'vue-i18n'
import en from './en.json'
import ru from './ru.json'

const messages = {
    en: en,
    ru: ru
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n
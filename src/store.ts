import { persistentAtom } from '@nanostores/persistent'

export const isSimpleFonts = persistentAtom<boolean>('isSimpleFonts', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export const darkMode = persistentAtom<boolean>(
    'darkMode',
    window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    { encode: JSON.stringify, decode: JSON.parse }
)

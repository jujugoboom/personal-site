import { persistentAtom } from '@nanostores/persistent'

export const isSimpleFonts = persistentAtom<boolean>('isSimpleFonts', false, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

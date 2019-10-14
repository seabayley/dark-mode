import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkEnabled, setDarkEnabled] = useLocalStorage('darkModeEnabled')

    useEffect(() => {
        let elem = document.body
        darkEnabled ? elem.classList.add('dark-mode') : elem.classList.remove('dark-mode')
    }, [darkEnabled])
    return [darkEnabled, setDarkEnabled]
}
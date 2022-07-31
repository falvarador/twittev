import { useState, useEffect } from 'react'
import styles from './index.module.css'

export default function SwitchTheme () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const defaultDark =
      storedTheme === 'dark' || (storedTheme === null && prefersDark)

    if (defaultDark) {
      setDarkMode()
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setDarkMode()
    } else {
      setLightMode()
    }
  }

  const setDarkMode = () => {
    setTheme('dark')
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLightMode = () => {
    setTheme('light')
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  return (
    <fieldset className={styles.switch}>
      <label htmlFor="switch">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          role="switch"
          onClick={toggleTheme}
        />
        {theme === 'light' ? '🌚' : '🌞'}
      </label>
    </fieldset>
  )
}

import { useState, useEffect } from 'react'
import styles from './styles.module.css'

export default function SwitchTheme () {
  const [theme, setTheme] = useState('auto')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark' && setDarkTheme() && storedTheme === 'light' && setLightTheme()) setPreferTheme()
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }

  const setPreferTheme = () => {
    setTheme('auto')
    localStorage.setItem('theme', 'auto')
    document.documentElement.removeAttribute('data-theme')
  }

  const setDarkTheme = () => {
    setTheme('dark')
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  const setLightTheme = () => {
    setTheme('light')
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }

  return (
    <fieldset className={styles.switch} >
      <label htmlFor="switch">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          role="switch"
          checked={theme === 'dark'}
          onClick={toggleTheme}
        />
        {theme === 'light' ? '🌚' : theme === 'dark' ? '🌞' : '🌗' }
      </label>
      <label htmlFor="auto">
        <input
          type="radio"
          id="auto"
          name="auto"
          disabled={theme === 'auto'}
          checked={theme === 'auto'}
          onClick={setPreferTheme} />
          Auto
        </label>
    </fieldset>
  )
}

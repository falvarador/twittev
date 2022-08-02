import styles from './styles.module.css'

export default function Button ({ children, onClick }) {
  return (
    <button className={`${styles.button} contrast`} onClick={onClick}>
    {children}
    </button>
  )
}

import Image from 'next/future/image'
import styles from './styles.module.css'

export default function Avatar ({ alt, src, text }) {
  return (
    <fieldset>
      <Image className={styles.avatar} width={64} height={64} alt={alt} src={src} title={alt} />
      {text && <strong>{text}</strong>}
    </fieldset>
  )
}

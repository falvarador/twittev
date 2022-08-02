import Image from 'next/image'
import SwitchTheme from '../SwitchTheme'

export default function Layout ({ children }) {
  return (
    <section className="container">
      <main>{children}</main>
      <footer className='flex'>
        <SwitchTheme />
        <a
          href="https://github.com/falvarador"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image
              src="/twittev.png"
              alt="Twittev Logo"
              width={24}
              height={24}
            />
          </span>
        </a>
      </footer>
    </section>
  )
}

import { loginWithGitHub, authStateChanged } from '../firebase/client'

import { useEffect, useState } from 'react'
import Head from 'next/head'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import Layout from 'components/Layout'

export default function Home () {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    authStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch(err => { console.log(err) })
  }
  return (
    <div>
      <Head>
        <title>Twittev</title>
        <meta name="description" content="A clone of twitter for web developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
            <article>
            <h2>Twittev</h2>
            <p>A clone of twitter for <code>web developers</code> 💻 🌎</p>
            {
              user === null &&
              <Button onClick={handleClick}>
              <GitHub width={24} height={24} />
                Login with GitHub
              </Button>
            }
            {
              user?.avatar &&
              <fieldset>
                <Avatar
                  alt={user.username}
                  src={user.avatar}
                  text={user.username}
                />
              </fieldset>
            }
          </article>
        </section>
      </Layout>
    </div>
  )
}

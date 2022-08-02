import { useEffect, useState } from 'react'

import Card from 'components/Card'
import Layout from 'components/Layout'
import Twittev from 'components/Twittev'

export default function HomePage () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <Layout>
      <Card>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Twittev
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
      </Card>
      <nav></nav>
    </Layout>
  )
}

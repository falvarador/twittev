import Avatar from 'components/Avatar'

export default function Twittev ({ avatar, username, message, id }) {
  return (
    <fieldset className='twittev'>
      <Avatar alt={username} src={avatar} />
      <section>
          <strong>{username}</strong>
          <p>{message}</p>
      </section>
    </fieldset>
  )
}

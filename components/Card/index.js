export default function Card ({ url, title, description }) {
  return (
    <article>
      <a href={url}>
        <h2>{title}</h2>
      </a>
      <p>{description}</p>
    </article>
  )
}

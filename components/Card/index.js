export default function Card ({ url, title, description }) {
  return (
    <article>
      <a href={url}>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </article>
  )
}

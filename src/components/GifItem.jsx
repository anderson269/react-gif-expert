export const GifItem = ({ url, title }) => {
  return (
    <li className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </li>
  )
}
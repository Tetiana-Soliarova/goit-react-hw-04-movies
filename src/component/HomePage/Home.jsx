import { Link } from "react-router-dom";

export default function Home({ medias }) {
  return (
    <>
      {medias.map((media) => (
        <li key={media.id}>
          <Link to={`/movies/${media.id}`}>{media.title}</Link>
        </li>
      ))}
    </>
  );
}

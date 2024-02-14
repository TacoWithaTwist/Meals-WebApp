import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <>
      <Link to="/">
        Oops! Looks like we encountered an error! click this link to go back.
      </Link>
    </>
  );
}

import { Link } from "react-router-dom";

export function custom404() {
  return (
    <div>
      Sorry
      <Link to="/">Back to Page</Link>
    </div>
  );
}

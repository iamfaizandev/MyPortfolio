import { Link } from "react-router-dom";

export function WrongPath() {
  return (
    <div className="container-fluid">
      <div style={{ marginTop: "10%" }}>
        <h3 className="text-danger text-center">
          Wrong Path Please Follow Navbar
        </h3>
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "23px",
            textAlign: "center",
            display: "block",
            margin: "auto",
            cursor: "pointer",
          }}
          className="btn btn-dark w-25 mt-4  "
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}

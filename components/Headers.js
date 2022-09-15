import Link from "next/link";

export default function Headers() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Navbar</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
              <Link href="/product">
                <a className="nav-link">Product</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

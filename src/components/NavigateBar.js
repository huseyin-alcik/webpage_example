import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/test">
          <img src="/logo.png" alt="" width={70} height={70} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/testnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/test">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/test">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/test">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// {redirectButtons()}
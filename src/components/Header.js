import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-3 text-white fs-4 fw-bold" href="#">Praveen's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto h4">
                            <li className="nav-item mx-2"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/skills">Skills</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/grades">Grades</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/Card">Cards</Link></li>
                        </ul>
                    </div>

                </div>

            </nav> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"></script>

            <header id="home" className="bg-success text-white text-center p-5 mt-5">
                <div className="container-fluid">
                    <h1 className="display-4">My Portfolio</h1>
                    <p className="lead">Welcome to my portfolio page!</p>
                </div>
                {/* <img src={Praveen} alt="IMAGE" className="avatar"
          width="300"
          height="280"
          justify-content ="right"
           /> */}
            </header>
        </>
    );
}

export default Header;

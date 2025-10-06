import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="d-flex" style={{ alignItems: 'left' }}>
                    <a className="navbar-brand" href="#">Praveen's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-warning color-white" id="navbarNav">
                        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/skills">Skills</Link> | <Link to="/grades">Grades</Link> | <Link to="/contact">Contact</Link>
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

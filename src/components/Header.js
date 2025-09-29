import React from 'react';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
              <a class="navbar-brand" href="#">Praveen's Portfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="#home">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#about">About Me</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#skills">Skills</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#grades">Grades</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

      <header id="home" class="bg-success text-white text-center p-5 mt-5">
          <div class="container">
              <h1 class="display-4">My Portfolio</h1>
              <p class="lead">Welcome to my portfolio page!</p>
          </div>
      </header>
    </>
  );
}

export default Header;

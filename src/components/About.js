import React from 'react';
import img12 from '../Image/img12.jpg';

function About() {
  return (
    <>
      <main className="container">

        <section id="about" className="section">
          <div className="row">
            <div>
              <img src={img12} alt="IMAGE" className="avatar"
                width="300"
                height="280"
                border-radius=""
                justify-content="right"
              />

            </div>
            <div className="col-lg-12 mx-auto text-center">
              <h2 className="mb-4">About Me</h2>
              <p className="lead">My name is Praveen. I’ve started my UI/UX Development Learning journey at Tech
                Mahindra Smart Academy, Visakhapatnam!

                Over the past few weeks, I’ve been building a strong foundation by learning HTML, CSS,
                Bootstrap, and JavaScript, and I’m currently diving into modern frontend technologies like
                React.js. 💻

                The journey so far has been incredible — understanding how to structure responsive layouts,
                enhance user interfaces, and create interactive web experiences. Can’t wait to apply these
                skills in real-world projects and continue exploring the world of UI/UX and frontend
                development! 🚀</p>
            </div>
          </div>
        </section>

        <hr />

      </main>
    </>
  )
}

export default About

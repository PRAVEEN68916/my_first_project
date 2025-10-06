import React from 'react'

function Skills() {
  return (
    <div>
        <section id="skills" className="section">
            <div className="text-center">
                <h2 className="mb-5">My Skills</h2>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Soft Skills</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Communication</li>
                                <li className="list-group-item">Teamwork</li>
                                <li className="list-group-item">Problem-solving</li>
                                <li className="list-group-item">Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Technical Skills</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>
    </div>
  )
}

export default Skills

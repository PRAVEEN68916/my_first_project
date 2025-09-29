import React from 'react'

function Skills() {
  return (
    <div>
        <section id="skills" class="section">
            <div class="text-center">
                <h2 class="mb-5">My Skills</h2>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">Soft Skills</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Communication</li>
                                <li class="list-group-item">Teamwork</li>
                                <li class="list-group-item">Problem-solving</li>
                                <li class="list-group-item">Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">Technical Skills</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">HTML</li>
                                <li class="list-group-item">CSS</li>
                                <li class="list-group-item">JavaScript</li>
                                <li class="list-group-item">Bootstrap</li>
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

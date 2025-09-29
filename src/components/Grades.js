import React from 'react'

function Grades() {
  return (
    <div>
         <section id="grades" class="section">
            <div class="text-center">
                <h2 class="mb-5">Subjects & Grades</h2>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="table-responsive shadow-sm">
                        <table class="table table-striped table-hover text-center">
                            <thead class="table-dark">
                                <tr>
                                    <th>Subjects</th>
                                    <th>Marks</th>
                                    <th>Grades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML</td>
                                    <td>96</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>95</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>92</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>
    </div>
  )
}

export default Grades

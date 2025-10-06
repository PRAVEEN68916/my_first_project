import React from 'react'

function Grades() {
  return (
    <div>
         <section id="grades" className="section">
            <div className="text-center">
                <h2 className="mb-5">Subjects & Grades</h2>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="table-responsive shadow-sm">
                        <table className="table table-striped table-hover text-center border-dark">
                            <thead className="table-dark">
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

import React from 'react'

function Contact() {
  return (
    <div>
      
        <section id="contact" className="section">
            <div className="text-center">
                <h2 className="mb-5">Inquiry Form</h2>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="card p-4 shadow-sm">
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastname" className="form-label">Last Name:</label>
                                    <input type="text" className="form-control" id="lastname" name="lastname" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" name="email" required/>
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone No.:</label>
                                <input type="tel" className="form-control" id="phone" name="phone" required />
                            </div>
                            <div className="mb-3">
                                <label for="subject" className="form-label">Subject:</label>
                                <select className="form-select" id="subject" name="subject" required>
                                    <option value="general">General Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Support</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message:</label>
                                <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="file" className="form-label">Upload your file:</label>
                                <input type="file" className="form-control" id="file" name="file"
                                    accept=".jpg, .jpeg, .png, .pdf"/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact

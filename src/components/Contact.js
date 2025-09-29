import React from 'react'

function Contact() {
  return (
    <div>
      
        <section id="contact" class="section">
            <div class="text-center">
                <h2 class="mb-5">Inquiry Form</h2>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="card p-4 shadow-sm">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="name" class="form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" name="name" required/>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="lastname" class="form-label">Last Name:</label>
                                    <input type="text" class="form-control" id="lastname" name="lastname" required />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" name="email" required/>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone No.:</label>
                                <input type="tel" class="form-control" id="phone" name="phone" required />
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject:</label>
                                <select class="form-select" id="subject" name="subject" required>
                                    <option value="general">General Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Support</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message:</label>
                                <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="file" class="form-label">Upload your file:</label>
                                <input type="file" class="form-control" id="file" name="file"
                                    accept=".jpg, .jpeg, .png, .pdf"/>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
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

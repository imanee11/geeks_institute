import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container py-5" style={{ backgroundColor: "#f8f9fa" }}>
                <h2 className="text-center mb-4 fw-bold">Contact us</h2>
                <div className="row">
                    {/* Left side: contact info */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <p>Contact us and we will get back to you within 24 hours.</p>
                        <p>
                            <span className='p-2'>
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            Company Name
                        </p>
                        <p>
                            <span className='p-2'>
                                <i class="fa-solid fa-phone"></i> 
                            </span>
                            +256 778 800 900
                        </p>
                        <p>
                            <span className='p-2'>
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            company.gmail.com
                        </p>
                    </div>

                    {/* Right side: contact form */}
                    <div className="col-12 col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Contact
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email address"
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    placeholder="comment"
                                    rows="6"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: "#f4511e", color: "white" }}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
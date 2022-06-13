import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import img from '../assets/img/5124556.jpg';
// import { toast } from 'react-toastify';
import swal from 'sweetalert';
// import { toast, ToastContainer } from 'react-toastify';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("moqrbdoj");

    if (state.succeeded) {
        swal("Good job!", "Email Sent Successfully!", "success");
        setTimeout(function () {
            window.location.reload();
        }, 1500);
    }
    return (
        <div id='contacts' className='m-5'>
            <p data-aos="fade-up"
                data-aos-duration="1000" className='text-center text-3xl text-primary font-bold uppercase mt-10'>Contact Me</p>
            <div className='flex flex-col md:flex-row justify-items-center mt-10 gap-10'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="w-5/6 lg:w-1/2 border border-secondary p-5 lg:p-10 rounded-2xl mx-auto flex flex-col items-center  justify-center shadow-xl shadow-secondary">
                    <img src={img} alt="" className='w-full' />
                    <div className="hidden">
                        <h3 className="text-primary text-xl">EMAIL</h3>
                        <a href="https://mail.google.com/" className="contact__text mt-3">abdur17@student.sust.edu</a>

                        <h3 className="text-primary text-xl pt-5">PHONE</h3>
                        <span className="contact__text mt-3">(+880) 1521321696</span>

                        <h3 className="text-primary text-xl pt-5">ADDRESS</h3>
                        <a href="https://www.google.com/maps/place/Sylhet/" className="contact__text mt-3">Sylhet, Bangladesh</a>
                    </div>
                </div>
                <form data-aos="fade-up" 
                    data-aos-duration="1000" className='w-5/6 lg:w-1/2 mx-auto bg-secondary p-10 rounded-2xl' onSubmit={handleSubmit}>
                    <div className='flex flex-col my-5'>
                        <label htmlFor="email">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder='Enter Name'

                            className='input input-primary'
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex flex-col my-5'>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Enter Email'

                            className='input input-primary'
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            placeholder='Enter Message'
                            id="message"
                            name="message"
                            className='textarea textarea-primary'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className='btn btn-primary my-5 w-full' type="send" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
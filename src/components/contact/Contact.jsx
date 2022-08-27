import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1m35gc8', 'template_a4thbsh', form.current, 'Coa-Y62klOJFyZLgI')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>thomas.gs@outlook.com</h5>
              <a href="mailto:thomas.gs@outlook.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsTelephoneOutbound className='contact__option-icon'/>
              <h4>Phone</h4>
              <h5>+46725165685</h5>
              <a href="tel:thomas.gs@outlook.com" target="_blank">Call me</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact
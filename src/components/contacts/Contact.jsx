import React, { useRef }  from 'react'
import './contact.css'
import {AiTwotoneMail, 
  AiFillLinkedin,
  AiOutlineWhatsApp} from 'react-icons/ai'
/* ========== EmailJS API ======*/
import emailjs from 'emailjs-com';
/* ========== EmailJS API ======*/

const Contact = () => {
  /* ========== EmailJS API ======*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdpthsn', 'template_po4i8ic', form.current, 'k3QiTrobSqtkIDNJF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  /* ========== EmailJS API ======*/
  return (
    <section id='contact'>
      <h5>Let's connect!</h5>
      <h2>Contact Information</h2>
      <div className="container contact_container">
        {/* START OF CONTACT OPTIONS */}
        <div className="contact_options">
        {
          data.map(({id, icon, optionTitle, contact, sendMsg}) => {
            return ( 
              <article key={id} className="contact_option">
                {icon}
                <h4>{optionTitle}</h4>
                <h5>{contact}</h5>
                <a href={sendMsg} target='_blank' rel="noreferrer">
                  Contact me!
                </a>
              </article>
            )
          })
        }
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" id="" rows="10" placeholder='Reach out!'></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

const data = [
  {
    id: 3,
    icon: <AiTwotoneMail className='contact_option-icon'/>,
    optionTitle: 'Email',
    contact: 'gaumengyew@gmail.com',
    sendMsg: "mailto:gaumengyew@gmail.com"
  },
  {
    id: 2,
    icon: <AiFillLinkedin className='contact_option-icon'/>,
    optionTitle: 'LinkedIn',
    contact: 'linkedin.com/in/mengyewgau/',
    sendMsg: "https://www.linkedin.com/in/mengyewgau/"

  },
  {
    id: 1,
    icon: <AiOutlineWhatsApp className='contact_option-icon'/>,
    optionTitle: 'Whatsapp',
    contact: '+6586138191',
    sendMsg: "https://api.whatsapp.com/send?phone=86138191",
  },
]

export default Contact
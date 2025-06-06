import { React, useEffect, useRef } from 'react';
import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaThumbsUp,
  FaMailBulk
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {

  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();


    const userNameFirstLetter = e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1);
    e.target[0].value = userNameFirstLetter;

    if ((e.target[0].value && e.target[2].value && e.target[3].value && e.target[4].value) === "") {
      toast.warn(<p className='toastMessageStyle'> 🔊 Please  Fill ✍️ All The
        Fields 😨😱 , Thank You 😉🤗👍 </p>);
      return
    }

     const formData = {
    from_name: e.target.from_name.value,
    reply_to: e.target.reply_to.value,
    mobile_no: e.target.mobile_no.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };
    // Sending Email using emailjs library ........
    emailjs.sendForm('service_iy0evyx', 'template_x7x6unr', form.current, 'tMVo9tWD_mYE_4L6A')
      .then((result) => {
        console.log(result.text);
        

       return  emailjs.sendForm('service_iy0evyx', 'template_z0gsi9b', formData, 'tMVo9tWD_mYE_4L6A')
        .then(() => {
          console.log('Auto-reply sent');
        })
      }, (error) => {
        console.log(error.text);
        toast.error(<p className='toastMessageStyle'> {error.text} </p>);
      });

    toast.success(<p className='toastMessageStyle'> Thank You 🚀😊🤝 , i will contact
      to you ASAP ✌️👍  </p>);

    e.target.reset();
  };
  const contactDetails = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      value: "Chembarambakkam, Thiruvallur District, Chennai - 600123, Tamil Nadu, India",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sanjaysmart3001@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Number",
      value: "+91-9003117083",
    },
  ];

  return (
    <>
      <section className="contact">
        <h1 className="heading"> contact  <span> me </span></h1>
        <div className="row">
          <div className="info-container">
            <h1> Get In Touch </h1>
            <p> If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my
              email regularly, and I'll get back to you as soon as possible. </p>
            <div className="box-container">

              {contactDetails.map((item, index) => (
                <div className="box" key={index}>
                  <i>{item.icon}</i>
                  <div className="info">
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}

            </div>

            <div className="share">
              <a href="https://www.linkedin.com/in/sanjay-kumar-a7a162176/" target="_blank"> <FaLinkedin className="mediaIcons" /> </a>
              <a href="mailto:sanjaysmart3001@gmail.com"> <FaMailBulk className="mediaIcons" /> </a>
              <a href="https://github.com/smartysanjay3001" target="_blank" > <FaGithub className="mediaIcons" /> </a>
              {/* <a href="#"> <FaInstagram className="mediaIcons" /> </a> */}

            </div>

          </div>

          <form ref={form} onSubmit={sendEmail}>

            <div className="inputBox">
              <input type="text" name="from_name" placeholder="your name" />
              <input type="number" name="mobile_no" placeholder="your number" />
            </div>

            <div className="inputBox">
              <input type="email" name="reply_to" placeholder="your email" />
              <input type="text" name="subject" placeholder="your subject" />
            </div>

            <textarea name="message" placeholder="your message" id="" cols="30" rows="10" />

            <input type="submit" value="Send Message" className="btn" />

          </form>

        </div>

      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Contact
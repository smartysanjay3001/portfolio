import { React, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRedo,
  FaCalendar,
  FaLink,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import bond from "../assets/bond.jpg";
import jusfood from "../assets/jusfood.jpg";


function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const mywork = [
    { icon: bond, label: "HTML", alt: "Bondvue", title: 'Bondvue', link: "https://bondvue.com",years:"May 2024 - Present",content:"Developed a secure bond trading platform simulating real-time NSE activity. Users could buy/sell bonds, track portfolios, and view live market data via NSE APIs. Implemented user authentication, payment gateway integration, and interactive dashboards. Collaborated with backend team to optimize performance and support high transaction volumes." },
    { icon: jusfood, label: "CSS", alt: "Jusfood", title: 'Jusfood', link: "https://jusfood.com" ,years:'Aug 2024 - Feb 2025',content:"Built a food delivery platform like Swiggy, enabling users to browse, order, and track food from local restaurants. Developed secure APIs for user auth, ordering, and payments. Integrated Google Maps for real-time tracking and Shadowfax API for third-party delivery. Created vendor tools to manage orders and deliveries. Designed a user-friendly interface with order history, customizations, and notifications."},
  ];

  return (
    <>
      <section className="blogs">
        <h1 className="heading"> <span> my </span> Works </h1>
        <div className="box-container">


          {mywork.map((works, index) => (

            <div className="box" key={index}>
              <div className="image">
                <img src={works.icon} alt={works.alt} />
              </div>
              <div className="content">
                <div className="icons">
                  <a href="#"><i><FaCalendar /></i> {works.years} </a>
                  
                </div>
                <h3> {works.title} </h3>
                <p> {works.content} </p>
                <div className="loadingBtn">
                  <a href={works.link} className="btnReadMore" target='_blank'> Click <span> <FaLink className="downloadBtnIcon" /> </span> </a>
                </div>
              </div>
            </div>

          ))}







        </div>

      </section>
    </>
  )
}

export default Blogs
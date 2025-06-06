import { React, useEffect } from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
import sassIcon from "../assets/sass.png";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import angularIcon from "../assets/angularjs.png";
import phpIcon from "../assets/php.png";
import python from "../assets/python.png";
import larvelIcon from "../assets/larvel.png";
// import resume from "../assets/resume.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const techStack = [
    { icon: phpIcon, label: "PHP", alt: "phpIcon" },
    { icon: python, label: "Python", alt: "pyhtonIcon" },
    { icon: javascriptIcon, label: "JavaScript", alt: "javascriptIcon" },
    { icon: reactIcon, label: "React", alt: "reactIcon" },
    { icon: htmlIcon, label: "HTML", alt: "htmlIcon" },
    { icon: cssIcon, label: "CSS", alt: "cssIcon" },
    { icon: bootstrapIcon, label: "Bootstrap", alt: "bootstrapIcon" },
    { icon: sassIcon, label: "Sass", alt: "sassIcon" },
    // { icon: angularIcon, label: "AngularJS", alt: "angularIcon" },
    // { icon: larvelIcon, label: "Laravel", alt: "laravelIcon" },
  ];

  const experinece = [
    { expe: 1.5, para: "Year Of Experience" },
    { expe: 6, para: "Months Of Trainee", },

  ];
  const myexperinece = [
    {com_name:'NETAXIS IT SOLUTIONS (P) LTD', icon: <FaLaptopCode/>, years: "Jun 2023 - Nov 2023", field: "Fullstack Developer (Trainee)", para: "I designed some front-end templates. And I worked with CSS and Bootstrap for designing UI. I have done some API integration in small projects" },
    {com_name:"Nscript Web Studios ", icon: <FaLaptopCode/>, years: "Jan 2024 - Present", field: "Web Developer", para: " As a Software Developer at nScript Technologies, I contributed to the development of a food delivery and trading platform aimed at enhancing operational efficiency, user experience, and backend performance. I worked across both front-end and back-end components, using PHP, Python, HTML, CSS, JavaScript, and MySQL to build and maintain dynamic, database-driven web applications." },
    

  ];
  const myeducation = [
    { icon: <FaGraduationCap/>, years: "Mar 2016 - Apr 2018", field: "Higher Secondary 12TH", para: "I scored 82% on the higher secondary board exam." },
    { icon: <FaGraduationCap/>, years: "Mar 2018 - Apr 2022", field: "B.E Mechanical Engineering", para: "I completed my Mechanical Engineering degree with 8.10 CGPA in Panimalar Enginnering College, Chennai, Tamil Nadu, India." },


  ];
// FaLaptopCode
  return (
    <>
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span> me </span>{" "}
        </h1>
        <div className="row">
          <div className="info-container">
            <h1> personal info </h1>
            <div className="box-container">
              <div className="box">
                <h3> <span> Name : </span>  Sanjaykumar </h3>
                <h3> <span> Age : </span> 24 </h3>
                <h3> <span> Email : </span> sanjaysmart3001@gmail.com </h3>
                <h3>
                  {" "}
                  <span> Address : </span>
                  Chembarambakkam,chennai-600123{" "}
                </h3>
              </div>
              <div className="box">

                <h3> <span> Skill : </span> Web Developer </h3>
                <h3> <span> Experience : </span> 1.5 </h3>
                <h3> <span> Language : </span> Tamil, English </h3>
              </div>
            </div>
            {/* <div className="aboutMeBtn">
          <a href={resume} download="sanjaykumarResume" target='_blank'  className="btnAbout" >
            {" "}
            Download CV{" "}
            <span>
              {" "}
              <FaDownload className="downloadBtnIcon" />{" "}
            </span>{" "}
          </a>
        </div> */}
          </div>
          <div className="count-container">

            {experinece.map((experinece, index) => (
              <div className="box" key={index}>
                <h3> {experinece.expe} </h3>
                <p> {experinece.para} </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          {techStack.map((tech, index) => (
            <div className="box" key={index}>
              <img src={tech.icon} alt={tech.alt} />
              <h3>{tech.label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container">

          {myeducation.map((education, index) => (
            <div className="box" key={index}>
              <i>{education.icon } </i>
              <span> {education.years} </span>
              <h3> {education.field} </h3>
              <p>{education.para}</p>
            </div>
          ))}



          




        </div>

      </section>
      <section className="education">
        <h1 className="heading"><span> my </span> experience </h1>
        <div className="box-container">
          {myexperinece.map((education, index) => (
            <div className="box" key={index}>
              <i>{education.icon } </i>
              <span> {education.com_name} </span>
              <span> {education.years} </span>
              <h3> {education.field} </h3>
              <p>{education.para}</p>
            </div>
          ))}

         



        </div>

      </section>
    </>
  )
}

export default About
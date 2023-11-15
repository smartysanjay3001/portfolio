import {React, useEffect} from 'react';
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
import larvelIcon from "../assets/larvel.png";
// import resume from "../assets/resume.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
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
            <h3> <span> Age : </span> 22 </h3>
            <h3> <span> Email : </span> sanjaysmart3001@gmail.com </h3>
            <h3>
              {" "}
              <span> Address : </span>
               Chembarambakkam,chennai-600123{" "}
            </h3>
          </div>
          <div className="box">
          
            <h3> <span> Skill : </span> Fullstack Developer </h3>
            <h3> <span> Experience : </span> Fresher </h3>
            <h3> <span> Language : </span> Tamil, English </h3>
          </div>
        </div>
        {/* <div className="aboutMeBtn"> */}
          {/* <a href={resume} download="sanjaykumarResume" target='_blank'  className="btnAbout" > */}
            {/* {" "} */}
            {/* Download CV{" "} */}
            {/* <span> */}
              {/* {" "} */}
              {/* <FaDownload className="downloadBtnIcon" />{" "} */}
            {/* </span>{" "} */}
          {/* </a> */}
        {/* </div> */}
      </div>
      <div className="count-container">
        <div className="box">
          <h3> 0 </h3>
          <p> Year Of Experience </p>
        </div>

        <div className="box">
          <h3> 6 </h3>
          <p> Months Of Internship </p>
        </div>

     
        
      </div>
    </div>
  </section>

  <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
          <div className="box">
            <img src={sassIcon} alt="htmlIcon"/>
            <h3> sass </h3>
          </div>
          <div className="box">
            <img src={angularIcon} alt="htmlIcon"/>
            <h3> Angularjs </h3>
          </div>
          <div className="box">
            <img src={phpIcon} alt="htmlIcon"/>
            <h3> Php </h3>
          </div>
          <div className="box">
            <img src={larvelIcon} alt="htmlIcon"/>
            <h3> Larvel </h3>
          </div>

        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container"> 
          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Mar 2016 - Apr 2018 </span>
            <h3> Higher Secondary 12TH </h3>
            <p> I scored 82% on the higher secondary board exam.
              
               </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Mar 2018 - Apr 2022 </span>
            <h3> B.E Mechanical Engineering </h3>
            <p> I completed my Mechanical Engineering degree with 8.10 CGPA in Panimalar Enginnering College, Chennai, 
              Tamil Nadu, India.</p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> Jun 2023 - Nov 2023 </span>
            <h3> Fullstack Developer (Trainee) </h3>
            <p> I designed some front-end templates. And I worked with CSS and Bootstrap for designing UI. 
            I have done some API integration in small projects </p>
          </div>

      

        </div>

      </section>
  </>
  )
}

export default About
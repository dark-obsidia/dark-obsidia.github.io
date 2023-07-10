import "../../styles/index.css";
import AbelPic from "../../images/Abel Lu.jpg";

const AboutMe = () => {

    return (
        <div className="AboutMe page" id="about-me">
            <br />
            <h2>About Me</h2>
            <div className="about-me-container">
            <div className="about-me-box">
                <br />
                <img src={AbelPic} height="450px" width="300px" alt="Abel Lu" />
            </div>

            <div className="about-me-box">
                <h3 className="Hello">Hi, I'm Abel Lu 👋</h3>
                <br/>
                <p> My name is Abel Lu, and I'm a second-year Computer Science student at North Carolina State University.
                    I've previously taken Software Development Fundamentals, a Java class where I learned
                    about software development best practices, unit testing, and finite state machines, as well as an
                    Intro to Data Science course where I used RStudio and Python to analyze and visualize data
                    with dplyr, numpy, pandas, and matplotlib. This upcoming year, I will be taking Discrete Math,
                    C / Software Tools, and Data Structures and Algorithms. Aside from my
                    coursework, I'm also working on a few personal projects, including a Osu-themed Discord bot
                    being made using discord.py, as well as the digital portfolio you're reading right now, which I
                    built to practice React. If you'd like to get in touch with me, feel free to contact me through
                    LinkedIn or through my contact page. I'm happy to connect!</p>
                    <br></br>
                {/*<p> <b>Experience: </b> Software Engineer Intern @ Lowe's, Engineering Extern @ Cisco</p>*/}
                {/*<p> <b>Skills: </b>Java, Python, React, Redux</p>*/}
                {/* <br></br>
                <p> Aside from being a Computer Science major, I'm also an avid music student! Here at NC State, I'm a member
                    of the Marching Band, where I play the snare drum, the Wind Ensemble, where I play percussion, and the
                    Beginning Band, where I'm learning how to play the flute. I'm also a big fan of college and professional
                    basketball. My favorite college team is the NC State Wolfpack, and my favorite NBA team is the Los Angeles
                    Lakers. In addition to just watching basketball, I also like to play! As a member of NC State's intramural
                    basketball league, I get the privilege of playing in recreational matches with some of the best teammates in the world.</p> */}
                {/*    <br></br>*/}
                {/*<p> If you'd like to get in touch with me, feel free to connect with me on LinkedIn or contact me through my*/}
                {/*    contact page.</p>*/}
            </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
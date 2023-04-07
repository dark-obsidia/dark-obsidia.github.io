import "./styles/index.css";
import AbelPic from "./images/Abel Lu.jpg";

const Home = () => {

    return (
        <div className="Home" id="AboutMe">
            <div className="about-me-container">
            <div className="about-me-box">
                <br />
                <img src={AbelPic} height="450px" width="300px" alt="Abel Lu" />
            </div>

            <div className="about-me-box">
                <br />
                <h3 className="Hello">Hi, I'm Abel Lu 👋</h3>
                
                <br/>
                <p> Hey there! My name is Abel Lu, and I'm a sophomore Computer Science student at North Carolina State University.
                    I'm currently enrolled in Software Development Fundamentals, a Java class where I've been learning
                    about software development best practices, unit testing, and finite state machines. I'm also taking
                    an introductory Data Science course where I've been using RStudio and Python to analyze and visualize data
                    with dplyr, numpy, pandas, and matplotlib. Aside from my
                    coursework, I'm also working on a few personal projects, including a Genshin Impact-themed Discord bot
                    being made using discord.py, as well as the digital portfolio you're reading right now, which has been
                    created with React.js, HTML, and CSS.</p>
                <br></br>
                <p> Aside from being a Computer Science major, I'm also an avid music student! Here at NC State, I'm a member
                    of the Marching Band, where I play the snare drum, the Wind Ensemble, where I play percussion, and the
                    Beginning Band, where I'm learning how to play the flute. I'm also a big fan of college and professional
                    basketball. My favorite college team is the NC State Wolfpack, and my favorite NBA team is the Los Angeles
                    Lakers. In addition to just watching basketball, I also like to play! As a member of NC State's intramural
                    basketball league, I get the privilege of playing in recreational matches with some of the best teammates in the world.</p>
                <br></br>
                <p> Now that you know all about me, I'd love to get to know you as well! If you'd like to chat, feel free to
                    connect with me on LinkedIn or through my "Contact Me" page. I'll be more than happy to get in touch with you!</p>
            </div>
            </div>
        </div>
     );
}
 
export default Home;
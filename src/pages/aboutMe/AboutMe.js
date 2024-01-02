import "../../styles/index.css";
import Selfie from "../../images/about-me-selfie.jpg";

const AboutMe = () => {

    return (
        <div className="AboutMe page" id="about-me">
            <br />
            <h2>About Me</h2>
            <div className="about-me-container">
                <div className="about-me-box">
                    <br />
                    <img src={Selfie} width="300px" height="300px" style={{borderRadius: "50%"}} alt="Sophia Nunez" />
                </div>

                <div className="about-me-box">
                    <p>
                        My name is Sophia Nunez, and I'm a second-year biochemistry student at North Carolina State
                        University. I've previously taken introductory biology and chemistry courses in college to develop
                        my knowledge and hands-on skills. I'm also part of various campus organizations, including a resident in the
                        WISE Living-Learning Community and an Outreach Officer in Japan Club. This upcoming year, I will be taking Organic
                        Chemistry II and Introduction to Genetics.
                    </p>
                    <br/>
                    <p>
                        For the Spring 2024 semester, I will be interning with Lindy Biosciences on their analytics team. 
                        I've previously worked as contracted employee in the disease traits lab at Syngenta RTP. Working as
                        a lab assistant, I conducted research on the resistance of genetically modified crops to various
                        diseases. The main focus of this lab was Asian Soybean Rust, known as the "billion dollar disease",
                        which impacts farmers globally. I would be happy to discuss research 
                        as well as share my own experiences in the lab - if you'd like to get in touch with me,
                        feel free to contact me through LinkedIn or my contact page!
                    </p>
                    <br/>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
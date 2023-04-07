import "./styles/index.css"
import ContactForm from "./ContactForm";
import GitHub from "./images/github.png";
import LinkedIn from "./images/linkedin.png";

const ContactMe = () => {
    return ( 
        <div className="ContactMe" id="ContactMe">
            <br />
            <h2>Contact Me</h2>
            <br/>
            <div className="socials-container">
                <div className="social">
                    <a href="https://github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>
                        <img alt="GitHub Logo" src={GitHub}/>
                    </a>
                    <b>GitHub</b>
                </div>
                <div className="social">
                    <a href="https://linkedin.com/in/aluprof4" target={'_blank'} rel={'noreferrer'}>
                        <img alt="LinkedIn Logo" src={LinkedIn}/>
                    </a>
                    <b>LinkedIn</b>
                </div>
            </div>
            <p style={{textAlign: "center", paddingBottom: "5px"}}>📧 aluprof4@gmail.com</p>
            <p style={{textAlign: "center", paddingBottom: "20px"}}>📱 +1 269-501-7211</p>
            <ContactForm/>
        </div>
     );
}
 
export default ContactMe;
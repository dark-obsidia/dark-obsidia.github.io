import "./styles/index.css"
import ContactForm from "./ContactForm";

const ContactMe = () => {
    return ( 
        <div className="ContactMe" id="ContactMe">
            <h2>Contact Me</h2>
            <br/>
            <p> Feel free to connect with me on LinkedIn, through email at aluprof4@gmail.com, or through my contact form below.
                I'll be more than happy to get in touch with you!</p>
            <br></br>
            <ContactForm/>
        </div>
     );
}
 
export default ContactMe;
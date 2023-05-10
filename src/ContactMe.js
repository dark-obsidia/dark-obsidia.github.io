import "./styles/index.css"
import ContactForm from "./ContactForm";
import SocialsJSON from "./data/socials.json";

const ContactMe = () => {
    return ( 
        <div className="ContactMe page" id="contact-me">
            <br />
            <h2>Contact Me</h2>
            <br/>
        
            <div className="socials-container">
                {
                    SocialsJSON.map( social => {
                        return(
                            <div className="social">
                                <a href={social.url} target={'_blank'} rel={'noreferrer'}>
                                        <img src={require('./images/' + social.image)} alt={social.alt} />
                                </a>
                                <b>{social.title}</b>
                            </div>
                        )
                    })
                }
            </div>
            <p style={{textAlign: "center", paddingBottom: "5px"}}>📧 aluprof4@gmail.com</p>
            <p style={{textAlign: "center", paddingBottom: "20px"}}>📱 +1 269-501-7211</p>
            <ContactForm/>
        </div>
     );
}
 
export default ContactMe;
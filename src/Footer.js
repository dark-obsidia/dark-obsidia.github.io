import SocialsJSON from "./data/socials.json";


const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="socials-container">
                {
                    SocialsJSON.map( social => {
                        return(
                            <div className="social">
                                <a href={social.url} target={'_blank'} rel={'noreferrer'}>
                                    <img src={require('./images/' + social.image)} alt={social.alt} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <p>
                © 2023 Sophia R. Nunez. All Rights Reserved.
            </p>
            <p style={{textAlign: "center", padding: "5px"}}>📧 sophiarnunez@hotmail.com</p>
            <p style={{textAlign: "center", paddingBottom: "20px"}}>📱 +1 919-448-6075</p>
        </footer>
    )
}

export default Footer;
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
                Copyright © 2023 Abel Lu. All Rights Reserved.
            </p>
            <p style={{textAlign: "center", padding: "5px"}}>📧 aluprof4@gmail.com</p>
            <p style={{textAlign: "center", paddingBottom: "20px"}}>📱 +1 269-501-7211</p>
        </footer>
    )
}

export default Footer;
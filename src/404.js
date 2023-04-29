import "./styles/index.css";

import Background from './images/wallpaper.jpg'

const Error404 = () => {
    return ( 
        <div className="Home" id="404">
            <h1 style={
            {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(" + Background + ")",
            width: "100%"
            }
            } id="Home"><p style={{fontSize: "50px"}}>404 Error</p><br /><p>How'd you get here?</p><br />
            </h1>
        </div>
     );
}
 
export default Error404;
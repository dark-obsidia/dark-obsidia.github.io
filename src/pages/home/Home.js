import "../../styles/index.css";

import Background from '../../images/wallpaper.jpg'

const Home = () => {
    return ( 
        <div className="Home" id="home">
            <h1 style={
            {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(" + Background + ")",
            width: "100%"
            }
            } id="Home"><p style={{fontSize: "50px"}}> Abel Lu </p><p>—</p><p>CompSci @ NC State</p><p>Lowe's: SWE Intern</p><br /><br />
            </h1>
        </div>
     );
}
 
export default Home;
import "../../styles/index.css";
import "./home.css"
import reactPic from "../../images/home-selfie.jpg";

const Home = () => {
    return ( 
        <div className="Home page" id="home">
            <img src={reactPic} alt={"bruh"} style={{width: "384px", maxWidth: "80%", borderRadius: "50%", marginBottom: "50px"}}/>
            <h2 style={{textAlign: "center"}}>
                Hi, I'm Abel Lu 👋<br/>
                - <br/>

            </h2>
            <h3 style={{textAlign: "center", lineHeight: "40px"}}>
                Computer Science @ NC State</h3>

        </div>
     );
}
 
export default Home;
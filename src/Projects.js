import "./styles/index.css";
import discord from "./images/discord.png";
import osu from "./images/osu.png";
import genshin from "./images/genshin.png";

const Projects = () => {
    return (  
        <div className="Projects" id="Projects">
            <h2>Projects</h2>
            <br/>
            <div className="projects-container">
                <div className="project">
                    <a href="https://github.com/azn-abel?tab=repositories&language=python" target={'_blank'} rel={'noreferrer'}>
                        <img alt="Discord Logo" src={discord}/>
                    </a>
                    <b>Discord Bots</b>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/OsuBot" target={'_blank'} rel={'noreferrer'}>
                        <img alt="osu! logo" src={osu}/>
                    </a>
                    <b>osu! API</b>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/GenshinDiscordBot" target={'_blank'} rel={'noreferrer'}>
                        <img alt="Genshin Impact Logo" src={genshin}/>
                    </a>
                    <b>Genshin Impact</b>
                </div>
            </div>
            <br />
            <br></br>
            <iframe src="https://azn-abel.github.io/azn-abel/LuAbelResume.pdf" type="application/pdf" frameborder="0" title="Resume"></iframe>
                
        </div>
    );
}
 
export default Projects;
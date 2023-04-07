import "./styles/index.css";
import react from "./images/react.png";
import osu from "./images/osu.png";
import genshin from "./images/genshin.png";
import pokeball from "./images/pokeball.png";

const Projects = () => {
    return (  
        <div className="Projects" id="Projects">
            <br />
            <h2>Projects</h2>
            <br/>
            <p>I'm currently working on a few personal projects, including a Genshin Impact-themed Discord bot that
                will implement PostgreSQL as its data storage solution, an osu!-themed application that uses OAuth 
                authentication to access the osu! API, as well as the digital portfolio you're reading right now,
                which is being made with React.js. Feel free to check theses out below! And if you'd like a more up-to-date
                look at what I'm currently working on, please check out my GitHub page at <a style={{color: "#c6e2ff"}}href="https://www.github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>https://www.github.com/azn-abel</a>.</p><br />
            <div className="projects-container">
                <div className="project">
                    <a href="https://github.com/azn-abel/digital-portfolio" target={'_blank'} rel={'noreferrer'}>
                        <img style={{borderRadius: "200px"}} alt="React Logo" src={react}/>
                    </a>
                    <b>Portfolio</b>
                    <p>React.js, HTML, and CSS source code for this website.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/OsuBot" target={'_blank'} rel={'noreferrer'}>
                        <img alt="osu! logo" src={osu}/>
                    </a>
                    <b>osu! API</b>
                    <p>A discord.py bot that lets users share recent scores. </p>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/PokemonCollectingBot3" target={'_blank'} rel={'noreferrer'}>
                        <img alt="Pokeball" src={pokeball}/>
                    </a>
                    <b>PokeBot</b>
                    <p>A discord.py bot that simulates Pokemon collecting in chat rooms.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/GenshinDiscordBot" target={'_blank'} rel={'noreferrer'}>
                        <img style={{borderRadius: "200px"}} alt="Genshin Impact Logo" src={genshin}/>
                    </a>
                    <b>Genshin Impact</b>
                    <p>A discord.py bot that simulates Genshin Impact in Discord.</p>
                </div>
            </div>
            <br />
            <br></br>
        </div>
    );
}
 
export default Projects;
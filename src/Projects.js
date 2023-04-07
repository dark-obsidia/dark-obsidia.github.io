import "./styles/index.css";
import discord from "./images/discord.png";
import osu from "./images/osu.png";
import genshin from "./images/genshin.png";

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
                    <a href="https://github.com/azn-abel?tab=repositories&language=python" target={'_blank'} rel={'noreferrer'}>
                        <img alt="Discord Logo" src={discord}/>
                    </a>
                    <b>Discord Bots</b>
                    <p>A collection of Discord bots made using discord.py.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/OsuBot" target={'_blank'} rel={'noreferrer'}>
                        <img alt="osu! logo" src={osu}/>
                    </a>
                    <b>osu! API</b>
                    <p>A discord.py bot that lets users share recent scores. </p>
                </div>
                <div className="project">
                    <a href="https://github.com/azn-abel/GenshinDiscordBot" target={'_blank'} rel={'noreferrer'}>
                        <img alt="Genshin Impact Logo" src={genshin}/>
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
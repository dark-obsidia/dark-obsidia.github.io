import "./styles/index.css";

function FAQ() {
    return ( 
        <div className="faq page" id="faq">
            <br />
            <h2>Frequently Asked Questions</h2>
            <br />
            <br />
            <div className="question">
                <h3>Who are you?</h3>
                <br />
                <p>
                    My name is Abel Lu, and I'm a second-year student at North Carolina
                    State University! I'm currently working towards my Bachelor's degree
                    in Computer Science, and am planning on obtaining a Master's degree as
                    well.
                </p>
                <br />
            </div>
            <div className="question">
                <h3>What experience do you have?</h3>
                <br />
                <p>
                    I am currently a <b>Software Engineer Intern</b> at <b>Lowe's</b>, where
                    I'm working with teams located in the United States and India to develop software
                    that will be deployed to all of Lowe's' 2206 locations in the US, Canada,
                    and India, impacting approximately 300,000 in-store associates. Formerly,
                    I've worked as a <b>Lead Programming Instructor</b> at <b>Robotics For All</b>
                    , where I instructed over 100 students and oversaw 6 teaching assistants,
                    and as an <b> Engineering Extern</b> at <b>Cisco</b> where a team and I 
                    designed and presented a mobile app and won capstone competition judged 
                    by business and tech employees at Cisco.
                </p>
                <br />
            </div>
            <div className="question">
                <h3>What are your interests?</h3>
                <br />
                <p>
                    One of my favorite things to do is to work on coding projects (like this
                    website!), because they challenge me to think outside the box to achieve a goal.
                    Osu!Bot has been my favorite project so far, and working on it has taught me
                    how to develop and manage a web application from end to end. Aside from
                    programming, I'm also a huge fan of basketball. In fact, if any basketball is
                    live on TV, I'm probably watching it. My favorite NBA team is the Los Angeles
                    Lakers, and my favorite college team is the NC State Wolfpack. I'm also a huge
                    fan of anime. I was recently able to catch Makoto Shinkai's Suzume in theaters
                    with some of my friends, and it was a blast!
                </p>
                <br />
            </div>
        </div>
     );
}
 
export default FAQ;
import BlogEntry from "./BlogEntry";
import blogJson from "../../data/blog.json";


const Blog = () => {

    const BlogJson = blogJson.toReversed();

    return (
        <div className="Blog page" id="blog">
            <br/>
            <h2>Welcome to my blog!</h2>
            <br/>
            <p>It's great to see you here. In this blog, I'll be documenting my experience as I grow personally
            and professionally. There will be articles about internship experiences and cool projects I'm working on,
            as well as articles about video games, sports, and travelling.</p>
            <br/>
            <div className="blog-container">
                {
                    BlogJson.map((entry) => {
                        return (
                            <BlogEntry entry={entry}></BlogEntry>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;
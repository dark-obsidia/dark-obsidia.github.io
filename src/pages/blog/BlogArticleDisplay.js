import { useParams } from 'react-router-dom'
import blogJson from '../../data/blog.json'



const BlogArticleDisplay = () => {

    const { id } = useParams()
    // eslint-disable-next-line
    const [ blog ] = blogJson.filter((blog) => blog.id == id)
    return (
        <div style={{width: "80%", maxWidth: "800px"}} className="BlogArticleDisplay page" id={"blog/" + id}>
            <br/>
            <h2>{blog?.title || "Knock knock..."}</h2>
            <br/>
            <p>{blog?.date || "Who's there?"}</p>
            <br/>
            <div style={{width: "100%", display: "flex"}}>
                {blog && <img width={blog?.width || "100%"} style={{maxWidth: "800px", alignSelf: "initial"}} src={blog?.imageUrl} alt={"Lowe's Logo"}/>}
            </div>
            <br/>
            <p dangerouslySetInnerHTML={{__html: blog?.body || "Not a blog entry, unfortunately."}}></p>
        </div>
    )
}

export default BlogArticleDisplay;
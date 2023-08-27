import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {format} from "date-fns";

function PostPage() {
    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, [])
    
    if(!postInfo) return '';

    return (
        <div className="post-page">
            <h2>{postInfo.title}</h2>
            <div className="info-post-page">
            <time>{format(new Date(postInfo.createdAt), 'MMM d, yyyy HH:mm')}</time>
                <div className="author">by {postInfo.author.username} </div>
            </div>
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
    );
}

export default PostPage;
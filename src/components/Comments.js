import { useEffect, useState } from "react"

const Comments = () => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.


    const [comments, setComments] = useState([])
    const getComments = async () =>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleClick = (id) => {
        console.log(id);
    }

    useEffect(()=>{
        getComments()
    },[])

    return(
        <ul>
            <h1>Comments</h1>
            {comments.map(comment=><li onClick={()=>{handleClick(comment.id)}} key={comment.id}>{comment.body}</li>)}
        </ul>
    )
}

export default Comments
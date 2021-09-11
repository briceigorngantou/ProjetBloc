import React ,{ useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../../PostContext';
import './post.css';

function PostCard(props) {

    // Destructuration du props ( On recupere la donnee envoyes dans le props )
    const {monPost}=props;
    // ici je recupere la function de modification  du post courant
    const {setActualPost}= useContext(PostContext);

    const [count_like, setcount_like]=useState(null);
    const [count_comment, setcount_comment]=useState(null);

    function compte_like(){
        setcount_like(count_like+1);
    }
    function compte_comment(){
        setcount_comment(count_comment+1);
    }
    return (
        <div>
            <div className="post">
                <div>
                    <Link to="/Single"><img src={monPost.image}
                    onClick={()=>{
                        setActualPost(monPost);
                        console.log(monPost)
                    }}
                    alt="" className="img-post"/></Link>
                </div>
                    <div className="post-info">
                        <div className="post-cats">
                            <span className="post-cats-cat">{monPost.infos1}</span>
                            <span className="post-cats-cat">{monPost.infos2}</span>
                        </div>
                        <span className="post-titre">
                            {monPost.titre}
                        </span>
                        <span className="post-date">{monPost.date_post}</span>
                    </div>
                    <img className="post-reaction" src={monPost.like} alt="" onClick={compte_like} /> {count_like} Reactions
                    <img className="post-reaction" src={monPost.comment} onClick={compte_comment} alt=""/> {count_comment} Comments
                </div>
        </div>
    )
}
export default PostCard

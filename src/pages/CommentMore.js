import React from 'react';
import {doc,getDoc,} from 'firebase/firestore';
import {db} from '../firebase-config';

function CommentMore({id,comments}) {
    
    
    
    return (
        <div>
            {comments&&comments.map((com)=>{
                return <div id="commentNotShow">{com}</div>
            })
            }
            
        </div>
    );
}

export default CommentMore;
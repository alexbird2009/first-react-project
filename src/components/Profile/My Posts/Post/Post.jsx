import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {

    return <div className={classes.item}>
        <img src='https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' alt=''></img>
        {props.message}
        <div>
            <span>Like {props.likesCount}</span>
        </div>
    </div>
}

export default Post;
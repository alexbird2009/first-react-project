import React from 'react';
import classes from './Post.module.css';


const Post = () => {
    return <div className={classes.item}>
        <img src='https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' alt=''></img>
        Post
        <span>Like</span> <span>Dislike</span>
    </div>
}

export default Post;
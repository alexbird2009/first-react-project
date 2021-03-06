import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            <Post message = "Hello! How are you?" likesCount = "15" />
            <Post message = "It`s my first post!" likesCount = "20" />
        </div>
    </div>
}

export default MyPosts;
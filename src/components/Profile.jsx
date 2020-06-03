import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return <div className ={classes.content}>
        <div>
            <img src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' alt='' />
        </div>
        <div>
            avatar + description
        </div>
        <div>
            New post
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>
                Post 1
            </div>
            <div className={classes.item}>
                Post 2
            </div>
        </div>
    </div>

}

export default Profile;
import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';


const Profile = () => {
    return <div>
        <div>
            <img src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' alt='' />
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts />
    </div>

}

export default Profile;
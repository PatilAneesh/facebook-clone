import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
       <StoryReel/>
       <MessageSender />
       <Post
       profilePic="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing" 
        image="https://cdn.pixabay.com/photo/2018/01/01/01/57/woman-3053492__340.jpg" 
        message="Morning Yoga" 
         timestamp="02-02-2021 10:10:20Z" 
           username="aneesh" />
       <Post />
       <Post />
    </div>
  )
}

export default Feed

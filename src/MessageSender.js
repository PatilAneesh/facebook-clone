import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';

function MessageSender() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("")
    setImageUrl("")
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className="messageSender__input"
          placeholder="what's on your mind?" />
        
        <input
         value={imageUrl}
         onChange={(e)=>setImageUrl(e.target.value)}
        placeholder="image URL"
        />
        <button onClick={handleSubmit} type="submit">
          Hidden submit
           </button>
        </form>
      </div>

      <div className="messageSender__bottom">
      <div className="messageSender__option">
                    <PhotoCameraFrontIcon style={{color:'red'}}></PhotoCameraFrontIcon>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}></PhotoLibraryIcon>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsIcon style={{color:'orange'}}></EmojiEmotionsIcon>
                    <h3>Feeling/Activity</h3>
                </div>
      </div>
    </div>
  );
}

export default MessageSender;

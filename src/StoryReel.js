import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        image="https://cdn.pixabay.com/photo/2019/10/03/09/38/spain-4522800_960_720.jpg"
        title="Spain"
      ></Story>
      <Story
        profileSrc="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        image="https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319__340.jpg"
        title="Amsterdam lake"
      ></Story>
      <Story
        profileSrc="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        image="https://cdn.pixabay.com/photo/2018/01/12/11/55/london-3078109_960_720.jpg"
        title="London Bridge"
      ></Story>
      <Story
        profileSrc="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        image="https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg"
        title="Water Fall"
      ></Story>
      <Story
        profileSrc="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        image="https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_960_720.jpg"
        title="Wild life"
      ></Story>
    </div>
  );
}

export default StoryReel;

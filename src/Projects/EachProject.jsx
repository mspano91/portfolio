import React from "react";
import style from "../Projects/eachProject.module.css";

export default function EachProject() {
  const videos = [
    {
      video: "https://www.youtube.com/embed/LREzajthtd8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati, asperiores saepe, magni laborum aperiam ipsa, neque vitae dolore voluptatem debitis? Sed harum illum repellat aperiam, temporibus facilis. Voluptas, iure.",
    },
    {
      video: "https://www.youtube.com/embed/7tl0l3bRQjA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati, asperiores saepe, magni laborum aperiam ipsa, neque vitae dolore voluptatem debitis? Sed harum illum repellat aperiam, temporibus facilis. Voluptas, iure.",
    },
    {
      video: "https://www.youtube.com/embed/zMBfu6kXLPY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati, asperiores saepe, magni laborum aperiam ipsa, neque vitae dolore voluptatem debitis? Sed harum illum repellat aperiam, temporibus facilis. Voluptas, iure.",
    },
  ];

  return (
    <div className={style.containerProjectos}>
      {videos.map((video, index) => (
        <div className={style.containerEach}>
          <iframe
            key={index}
            width="560"
            height="315"
            src={video.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div>
            <p>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

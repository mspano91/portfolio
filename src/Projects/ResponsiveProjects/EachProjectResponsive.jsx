import React, { useState } from "react";
import style from "../ResponsiveProjects/EachProjectResponsive.module.css";
import videos from "../videos.js";

export default function EachProjectResponsive() {
  const itemsPerPage = 1;
  const [visibleVideos, setVisibleVideos] = useState(
    videos.slice(0, itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newVisibleVideos = videos.slice(0, endIndex);

    setVisibleVideos(newVisibleVideos);
    setCurrentPage(nextPage);
  };
  return (
    <div>
      <div className={style.carousel}>
        <div className={style.innerCarousel}>
          {visibleVideos.map((video, index) => (
            <div className={style.item}>
              <img className={style.picture} src={video.imagen} alt="" />
              <div className={style.description}>
                <h2>{video.tittle}</h2>
                <p>{video.description}</p>
                <div className={style.links}>
                  {video.git && (
                    <a
                      className={style.box}
                      href={video.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}

                  {video.git2 && (
                    <a
                      className={style.box}
                      href={video.git2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git Front
                    </a>
                  )}

                  {video.git1 && (
                    <a
                      className={style.box}
                      href={video.git1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git Back
                    </a>
                  )}

                  {video.deploy && (
                    <a
                      className={style.box}
                      href={video.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.loadMore}>
        <button className={style.moreBtn} onClick={handleLoadMore}>
          +
        </button>
      </div>
    </div>
  );
}

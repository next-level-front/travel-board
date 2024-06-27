import React, { useEffect, useState } from "react";
import "./css/MainContent.css";

function MainContent({ posts, handleView, handleSeletedItem }) {
  const [viewPost, setViewPost] = useState(5);

  const handleClick = (post) => {
    handleSeletedItem(() => post);
    handleView("details");
  };
  return (
    <div className="main-content">
      <div className="photo-area">
        <img
          class="main-banner"
          src={process.env.PUBLIC_URL + "/main-banner.jpg"}
          alt="메인 배너"
        />
      </div>
      <div className="button-container">
        <button className="btn1">글쓰기</button>
      </div>
      <div className="content-area">
        <div id="post-list">
          {posts
            .filter((post, index) => index < viewPost)
            .map((post) => (
              <div
                className="post"
                key={post.id}
                onClick={() => handleClick(post)}
              >
                <img src={post.images[0]} alt="Thumbnail" />
                <div className="content">
                  <div className="title">{post.title}</div>
                  <div className="description">{post.content}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {posts.length !== viewPost && (
        <button
          className="btn2"
          onClick={() => setViewPost((prev) => prev + 1)}
        >
          더보기
        </button>
      )}
    </div>
  );
}

export default MainContent;

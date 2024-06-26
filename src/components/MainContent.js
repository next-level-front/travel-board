import React, { useEffect } from 'react';
import './MainContent.css';

function MainContent() {

  useEffect(() => {
    const postList = document.getElementById('post-list');

    // Function to add a new post
    function addPost(id, title, description, imageUrl) {
      const post = document.createElement('div');
      post.className = 'post';
      post.id = `post-${id}`;
      
      post.innerHTML = `
        <img src="${imageUrl}" alt="Thumbnail">
        <div class="content">
          <div class="title">${title}</div>
          <div class="description">${description}</div>
        </div>
      `;
      
      postList.appendChild(post);
    }

    // 예제 더미 데이터
    addPost(1, 'Post Title 1', '게시내용의 첫줄이나, 요약이 나옴.', 'https://via.placeholder.com/100');
    addPost(2, 'Post Title 2', '게시내용의 첫줄이나, 요약이 나옴.', 'https://via.placeholder.com/100');
    addPost(3, 'Post Title 3', '게시내용의 첫줄이나, 요약이 나옴.', 'https://via.placeholder.com/100');

    // 더하기 버튼을 클릭하면 나오는 기능
    document.querySelector('.btn2').addEventListener('click', () => {
      const nextId = postList.children.length + 1;
      addPost(nextId, `Post Title ${nextId}`, `This is a description for post ${nextId}.`, 'https://via.placeholder.com/100');
    });

    // 더하기 버튼을 누르면 포스트를 더 볼 수 있음
    return () => {
      document.querySelector('.btn2').removeEventListener('click', addPost);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="photo-area">
      <img class="main-banner"
          src={process.env.PUBLIC_URL + '/main-banner.jpg'} alt="메인 배너" />
      </div>
      <div className="button-container">
        <button className="btn1">글쓰기</button>
      </div>
      <div className="content-area">
        <div id="post-list"></div>
      </div>
      <button className="btn2">더보기</button>
    </div>
  );
}

export default MainContent;
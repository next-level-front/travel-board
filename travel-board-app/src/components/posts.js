import React from 'react';
import '../css/stylespost.css';
import logo from '../assets/logo.png'; 
import { MyProvider } from '../contexts/context';

const postHeader = 'post-header';
const postLogoBox = 'post-logo-box';
const postButtonBox = 'post-button-box';
const postButton = 'post-button';
const postTitleSection = 'post-title-section';
const postAuthorSection = 'post-author-section';
const postContentSection = 'post-content-section';
const postContentBox = 'post-content-box';
const postThumbnailBox = 'post-thumbnail-box';
const postContentText = 'post-content-text';
const postCommentSection = 'post-comment-section';
const postCommentBox = 'post-comment-box';
const postFooter = 'post-footer';

function App() {
    return (
        <MyProvider>
            <div>
                {/* 헤더 */}
                <header className={postHeader}>
                    <div className={postLogoBox}>
                        <img src={logo} alt="로고" />
                    </div>
                    <div className={postButtonBox}>
                        <button className={postButton}>HOME</button>
                        <button className={postButton}>제출하기</button>
                    </div>
                </header>

                {/* 제목 섹션 */}
                <section className={postTitleSection}>
                    <input type="text" placeholder="제목을 입력하세요" />
                </section>

                {/* 작성자 정보 섹션 */}
                <section className={postAuthorSection}>
                    <input type="text" placeholder="작성자 (닉네임)" />
                </section>

                {/* 본문 섹션 */}
                <section className={postContentSection}>
                    <div className={postContentBox}>
                        사진 (대표사진)
                    </div>
                    <div className={postThumbnailBox}>
                        <div>사진1</div>
                        <div>사진2</div>
                        <div>사진3</div>
                        <div>사진4</div>
                    </div>
                </section>

                {/* 본문 텍스트 */}
                <section className={postContentSection}>
                    <div className={postContentText} contentEditable="true">
                        본문 내용
                    </div>
                </section>

                {/* 댓글 입력 섹션 */}
                <section className={postCommentSection}>
                    <h3>댓글 쓰기</h3>
                    <div className={postCommentBox}>
                        <textarea placeholder="댓글 작성하시겠습니까?"></textarea>
                        <button>등록</button>
                    </div>
                </section>

                {/* 푸터 */}
                <footer className={postFooter}>
                    <div className={postLogoBox}>
                        <img src={logo} alt="로고" />
                    </div>
                </footer>
            </div>
        </MyProvider>
    );
}

export default App;

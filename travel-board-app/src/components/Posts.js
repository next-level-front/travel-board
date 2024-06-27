import React from 'react';
import '../css/stylesmain.css';
import logo from '../../src/static/images/logo.png';

const postHeader = 'post-header';
const postLogoBox = 'post-logo-box';
const postButton = 'post-button';
const postTitleSection = 'post-title-section';
const postTitleBox = 'post-title-box';
const postContentSection = 'post-content-section';
const postContentBox = 'post-content-box';
const postContent = 'post-content';
const postWriteButton = 'post-write-button';
const postFooter = 'post-footer';

function Posts() {
    return (
        <div>
            {/* 상단 섹션 */}
            <header className={postHeader}>
                <div className={postLogoBox}>
                    <img src={logo} alt="로고" />
                </div>
                <button className={postButton}>게시판으로 이동</button>
            </header>

            <section className={postTitleSection}>
                <div className={postTitleBox}></div>
            </section>

            {/* 중단 섹션 */}
            <section className={postContentSection}>
                <div className={postContentBox}>
                    <div className={postContent}></div>
                    <div className={postContent}></div>
                    <div className={postContent}></div>
                    <div className={postContent}></div>
                    <div className={postContent}></div>
                    <div className={postContent}></div>
                    <button className={`${postButton} ${postWriteButton}`}>글쓰기</button>
                </div>
            </section>

            {/* 하단 섹션 */}
            <footer className={postFooter}>
                <div className={postLogoBox}>
                    <img src={logo} alt="로고" />
                </div>
            </footer>
        </div>
    );
}

export default Posts;

import React from 'react';
import {
    Wrapper, Header, Logo, HomeBtn, PageForm, TitleForm, Title,
    DataForm, Writer, DataTime, Img, ImgForm, Imgs, ImgsForm, ContentContainer, Content,
    RecForm, CommentForm, CommentStyle, CommentSection, NicknameInput, Comment, CommentInput, FileInput, SubmitButton, Footer, FooterLogo,
    Reclist
} from './styles'; // styles.js로부터 스타일 컴포넌트 가져오기

const homeOnClick = () => {
    // 홈 버튼 클릭 시 동작 정의
    if(true) {
        alert('홈화면으로 이동합니다.');
    } else {
        return false;
    }
    
};

const commentbtn = () => {

}

function setDatetime() {
    let date = new Date();
    let currentDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`; // 수정: date.getMonth()는 0부터 시작하므로 +1 필요
    return currentDate;
}

function DetailPost() {
    const comments = [
        { id: 1, text: '안녕?' },
        { id: 2, text: '여행 게시판이야!' },
        { id: 3, text: '잘부탁해!' },
    ];
    const imgs = [
        {id: 1, text: '첫 번째 이미지입니다.'},
        {id: 2, text: '두 번째 이미지입니다.'},
        {id: 3, text: '세 번째 이미지입니다.'},
        {id: 4, text: '네 번째 이미지입니다.'},
    ]
    return (
        <Wrapper>
            <Header>
                <Logo />
                <HomeBtn href="#" onClick={homeOnClick}>HOME</HomeBtn>
            </Header>
            <PageForm>
                <TitleForm>
                    <Title>
                        <span>제목</span>
                    </Title>
                    <DataForm>
                        <Writer>
                            <span>작성자</span>
                        </Writer>
                        <DataTime>
                            <span>작성시간: </span>{setDatetime()}
                        </DataTime>
                    </DataForm>
                </TitleForm>
                <ImgForm>
                {/* 대표사진 올리기 */}
                <Img src={imgs[0].src} alt=""></Img>
                </ImgForm>
                
                {/* 이미지 리스트 */}
                <ImgsForm>
                {imgs.map(img => (
                    <Imgs key={img.id}>
                        <img src={img.src} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Imgs>
                ))}
                </ImgsForm>
                <ContentContainer>
                    <Content>
                        <p>
                            여기에 내용 컴포넌트 들어가면 될듯?
                        </p>
                        </Content>
                </ContentContainer>
                <RecForm>
                    <Reclist>
                        추천리스트입니다. 이건...모르겠도다.
                        </Reclist>
                    </RecForm>

                    <CommentSection>
                    <NicknameInput placeholder="닉네임" />
                    {/* <FileInput type="file" /> */}
                    <CommentInput placeholder="댓글을 입력하세요" rows="4" />
                    <SubmitButton onClick={commentbtn}>보내기</SubmitButton>
                </CommentSection>

                <CommentStyle>
                        댓글
                </CommentStyle>
                    {/* map 함수 사용하기 */}
                    {comments.map(comment => (
                    <CommentForm key={comment.id}>
                    <Comment>
                        {comment.text}
                    </Comment>
                    </CommentForm>
                    ))}
            </PageForm>
            <Footer>
                <FooterLogo />
            </Footer>
        </Wrapper>
    );
}

export default DetailPost;
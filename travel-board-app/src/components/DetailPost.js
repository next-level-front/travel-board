import React, { useContext, useState } from 'react';
import {
    Wrapper, ModifyButton, PageForm, TitleForm, Title,
    DataForm, Writer, DataTime, Img, ImgForm, Imgs, ImgsForm, ContentContainer, Content,
    CommentForm, CommentStyle, CommentLi, Comment, CommentUl, CommentInput, SubmitButton,
    Reclist, Reclists
} from '../components/css/Detailstyles'; // Detailstyles.js로부터 스타일 컴포넌트 가져오기
import MyContext from '../contexts/MyContext';
import UpdatePage from './UpdatePage/UpdatePage';
import CreatePost from './CreatePost';


const DetailPost = () => {
    const { data, updateData } = useContext(MyContext);
    const [edit, setIsEdit] = useState(false);

    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([
        { id: 1, text: '우와! 멋지다!' },
        { id: 2, text: '부럽다!' },
        { id: 3, text: '나도 가고싶다 ㅠㅠ' },
    ]);
    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [content, setContent] = useState('');
    // const [images, setImages] = useState([]);

    const submitBtn = (e) => {
        e.preventDefault();
        const commentInputs = commentInput.trim()
        if(commentInputs) {
            const newComment = {id: commentInput.length, text: commentInput};
            setComments([...comments, newComment]);
            setCommentInput('');
        }
    }

    if (edit) {
        return <UpdatePage />;
    }

    const modifyBtn = (e) => {
        e.preventDefault();
        let modifyPwd = prompt("수정하려면 패스워드를 입력하세요:", "");
        let updatePwd = 123;
        if(window.confirm('수정하러 가시겠습니까?') && modifyPwd === updatePwd.toString()) {
            alert('수정페이지로 이동합니다.');
            setIsEdit(true);
        } else {
            alert('패스워드가 틀립니다.');
        }
    }

    const imgs = [
        {id: 1, text: '첫 번째 이미지입니다.'},
        {id: 2, text: '두 번째 이미지입니다.'},
        {id: 3, text: '세 번째 이미지입니다.'},
        {id: 4, text: '네 번째 이미지입니다.'},
    ]
    return (
        <Wrapper>
            <PageForm>
                <TitleForm>
                    <ModifyButton onClick={modifyBtn}>수정하기</ModifyButton>
                    <Title>
                        <span>제목 : </span>
                    </Title>
                    <DataForm>
                        <Writer>
                            <span>작성자 : </span>
                        </Writer>
                        <DataTime>
                            <span>작성시간: </span>
                        </DataTime>
                    </DataForm>
                </TitleForm>
                <ImgForm>
                {/* 대표사진 올리기 */}
                <Img src={imgs[0].src} alt="대표이미지"></Img>
                </ImgForm>
                
                {/* 이미지 리스트 */}
                <ImgsForm>
                {imgs.map(img => (
                    <Imgs key={img.id}>
                        <img src={img.src} alt='이미지'/>
                    </Imgs>
                ))}
                </ImgsForm>
                <ContentContainer>
                    <Content>
                        <p>
                            메인넣기
                            
                        </p>
                        </Content>
                </ContentContainer>
                    <Reclist>
                        추천리스트입니다.
                        <Reclists>
                            #여행
                        </Reclists>
                        <Reclists>
                            #제주도 도깨비도로
                        </Reclists>
                        <Reclists>
                            #제주도여행
                        </Reclists>
                        </Reclist>
                    <CommentUl>
                    <CommentLi>

                    <CommentInput
                    placeholder="댓글을 입력하세요"
                    value={commentInput}
                    onChange={(e) => {setCommentInput(e.target.value)}}
                    rows="4" />
                    <SubmitButton onClick={submitBtn}
                    >
                    보내기
                    </SubmitButton>
                </CommentLi>
                </CommentUl>
                <CommentStyle>
                        -댓글-
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
        </Wrapper>
    );
}

export default DetailPost;
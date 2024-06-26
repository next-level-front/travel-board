// styles.js
import styled from 'styled-components';
import logo from './logo.png';

// 웹페이지
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
    background-color: #4CB3AB;
    font-family: "Noto Sans KR", sans-serif;
`;

// 수정하기버튼
export const ModifyButton = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    background-color: #4CB3AB;
    color: white;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #3A9B8B;
    }
`;

// 페이지 폼
export const PageForm = styled.form`
    height: auto;
    min-height: 100%;
    background-color: white;
    padding: 20px;
`;

// 제목, 작성자, 작성시간 묶음
export const TitleForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
`;

export const Title = styled.div`
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    padding:20px;
`;

// 작성자 작성시간 flex
export const DataForm = styled.div`
    display: flex;
    justify-content: space-between;
`;

// 작성자
export const Writer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 400px;
    font-weight: bold;
`;

// 작성시간
export const DataTime = styled.div`
    padding: 20px;
`;

// 대표 이미지 폼
export const ImgForm = styled.div`
    display: flex;
    border: 1px solid #000; 
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;
`;

// 대표 이미지
export const Img = styled.img`
    width: 300px;
    height: 300px;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
    objectFit: cover;
`;

// 하위 이미지 폼
export const ImgsForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;

`;

export const Imgs = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
`;

//내용 컨테이너
export const ContentContainer = styled.div`
    width: 99%;
    height: 400px;
    border: 1px solid #000;
    margin-bottom: 20px;
`;

// 내용
export const Content = styled.div`
    height: 100%;
    padding: 10px;
`;



// 추천 리스트폼
export const Reclist = styled.ul`
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

// 추천 리스트
export const Reclists = styled.li`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;



// 댓글 폼
export const CommentForm = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
`;

// 댓글스타일
export const CommentStyle = styled.p`
    font-size: 30px;
    padding: 10px;
    line-height: 1.7;
`;

// 댓글
export const Comment = styled.p`
    font-size: 20px;
    line-height: 1.7;
`;

export const CommentUl = styled.div`
    margin-left: 20px;
`;

export const CommentInput = styled.input`
    width: 89%;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
`;

export const CommentLi = styled.div`
    margin: 20px 0;
`;


//보내기 버튼
export const SubmitButton = styled.button`
    width: 100px;
    height: 50px;
    padding: 10px;
    margin-top: 30px;
    margin-left: 10px;
    background-color: #4CB3AB;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3A9B8B;
    }
`;
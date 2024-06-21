import React from 'react';
import styled from 'styled-components';
// 전체 페이지 컨테이너
const PageContainer = styled.div`
    height: auto;
    min-height:100%;
    padding-bottom: 30px;
    font-family: Arial, sans-serif;
`;
// 헤더
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 40px;
  background-color: #fff;
  border-bottom: 1px solid gray;
  position: sticky;
  top: 0px; /* 도달했을때 고정시킬 위치 */
  z-index: 10;
}
`;
const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavLink = styled.a`
  text-decoration: none;
  color: white;
  width: 150px;
  text-align: center;
`;
const NavBtn = styled.button`
    padding: 20px;
    background-color: #A27B5C;
    border: none;
    margin-left: 20px;
`;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
const Firstarticle = styled.div`
    width: 90%;
    height: 350px;
    background-color: #000;
    color: white;
    margin-bottom:10px;
`;
// const Seconedarticle = styled.div`
//     width: 90%;
//     height: 500px;
//     background-color: gray;
//     color: white;
// `;
const BoardArticle = styled.div`
    width: 90%;
    height: 350px;
    color: white;
    background-color: gray;
    margin-bottom: 10px;
`;
const MoreBtn = styled.button`
    padding: 20px;
`;
const Footer = styled.footer`
    border-top: 1px bold black;
    height: 30px;
    text-align: center;
    background-color: black;
    color: white;
`;
const App = () => {
  return (
    <PageContainer>
      <Header>
      <Logo>Next_Level</Logo>
        <Nav>
        <NavBtn><NavLink href="#">글쓰기</NavLink></NavBtn>
        <NavBtn><NavLink href="#">게시판으로 이동</NavLink></NavBtn>
        </Nav>
      </Header>
      <Section>
        <Firstarticle>
          여기는 메인화면 그림입니다.
        </Firstarticle>
        <hr />
          여기는 게시글 자리입니다.
          게시글 컴포넌트 자리
          <BoardArticle/>
          <BoardArticle/>
          <BoardArticle/>
          <MoreBtn>MoreBtn</MoreBtn>
      </Section>
      <Footer>
      <Logo>Next_Level</Logo>
      </Footer>
    </PageContainer>
  );
};
export default App;
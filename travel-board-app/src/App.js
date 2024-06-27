import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UpdatePage from "./components/UpdatePage/UpdatePage";
import "./App.css";
import "./../src/components/css/MainContent.css";
import MyContext from "./contexts/MyContext";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  const { data } = useContext(MyContext);
  const [view, setView] = useState("home");
  const [seletedItem, setSelectedItem] = useState(data?.[0]);
  useEffect(() => {
    setSelectedItem(data?.[0]);
  }, [data]);

  let content;
  switch (view) {
    case "home":
      content = (
        <div className="main-content">
          <div className="rectangle">
            <button className="btn1" onClick={() => setView("create")}>
              글쓰기
            </button>
            <button className="btn2" onClick={() => setView("scroll")}>
              무한스크롤
            </button>
            <button className="btn" onClick={() => setView("update")}>
              Update
            </button>
            <MainContent posts={data} />
          </div>
        </div>
      );
      break;
    case "scroll":
      content = <div className="scroll-view">Scroll View</div>;
      break;
    case "create":
      content = (
        <div className="create-view">
          <CreatePost post={seletedItem} handleView={setView} />
        </div>
      );
      break;
    case "update":
      content = (
        <div className="content-area">
          <UpdatePage post={seletedItem} handleView={setView} />
        </div>
      );
      break;
    default:
      content = (
        <div className="content-area">
          <div className="rectangle"></div>
        </div>
      );
  }

  return (
    <div className="app-container">
      <Header />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UpdatePage from "./components/UpdatePage/UpdatePage";
import "./App.css";
import "./../src/components/css/MainContent.css";
import MyContext from "./contexts/MyContext";
import CreatePost from "./components/CreatePost";
import DetailPost from "./components/DetailPost";

function App() {
  const { data } = useContext(MyContext);
  const [view, setView] = useState("home");
  const [seletedItem, setSelectedItem] = useState();
  const [isChangeSelectedItem, setIsChangeSelectedItem] = useState(false);

  useEffect(() => {
    if (isChangeSelectedItem && seletedItem) {
      setView("details");
    }
    return () => {
      setIsChangeSelectedItem(false);
    };
  }, [seletedItem, isChangeSelectedItem]);
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
            <button className="btn" onClick={() => setView("details")}>
              detail
            </button>
            <MainContent
              posts={data}
              handleSeletedItem={setSelectedItem}
              handleView={setIsChangeSelectedItem}
            />
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
    case "details":
      content = (
        <div className="content-area">
          <DetailPost post={seletedItem} handleView={setView} />
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
      <Header handleView={setView} />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;

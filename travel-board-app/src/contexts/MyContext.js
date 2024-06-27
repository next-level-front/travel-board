import React, { createContext, useState, useEffect } from "react";
import testImage1 from "./../static/images/test1.jpeg";
import testImage2 from "./../static/images/test2.jpeg";
import testImage3 from "./../static/images/test3.jpeg";
import testImage4 from "./../static/images/test4.jpeg";
// Context 생성
const MyContext = createContext();

// 로컬 스토리지에서 데이터 가져오기
const loadDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// 로컬 스토리지에 데이터 저장하기
const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Provider 컴포넌트
export const MyProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "여행게시글1",
      author: "testAuthor",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용1`,
      timestamp: new Date().toLocaleString(),
      comment: [{ id: 1, text: '우와! 멋지다!' },
                { id: 2, text: '부럽다!' },
                { id: 3, text: '나도 가고싶다 ㅠㅠ' },
                ]
    },
    {
      id: 2,
      title: "여행게시글2",
      author: "testAuthor2",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용2`,
      timestamp: new Date().toLocaleString(),
      comment: [{ id: 1, text: '우와!' },
                { id: 2, text: '멋지다!' },
                { id: 3, text: '나도 휴일좀... ㅠㅠ' },
                ]
    },
    {
      id: 3,
      title: "여행게시글3",
      author: "testAuthor3",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용3`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 4,
      title: "여행게시글4",
      author: "testAuthor4",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용4`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 5,
      title: "여행게시글5",
      author: "testAuthor5",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용5`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 6,
      title: "여행게시글6",
      author: "testAuthor6",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용6`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 7,
      title: "여행게시글7",
      author: "testAuthor7",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용7`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 8,
      title: "여행게시글8",
      author: "testAuthor8",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용8`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 9,
      title: "여행게시글9",
      author: "testAuthor9",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용9`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 10,
      title: "여행게시글10",
      author: "testAuthor10",
      images: [testImage1, testImage2, testImage3, testImage4],
      password: "1234",
      content: `여행게시글 본문내용10`,
      timestamp: new Date().toLocaleString(),
    },
  ]);

  useEffect(() => {
    const storedData = loadDataFromLocalStorage("posts");
    if (storedData.length) {
      setData(storedData);
    }
  }, []);

  const addData = (title, content, author, images, password) => {
    const newData = [
      ...data,
      {
        id: data.length + 1,
        title,
        content,
        author,
        images,
        password,
        timestamp: new Date().toLocaleString(),
      },
    ];
    setData(newData);
    saveDataToLocalStorage("posts", newData);
  };

  const updateData = (id, updateData) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...updateData } : item
    );
    setData(updatedData);
    saveDataToLocalStorage("posts", updatedData);
  };

  const deleteData = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    saveDataToLocalStorage("posts", filteredData);
  };

  return (
    <MyContext.Provider value={{ data, addData, updateData, deleteData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

import React, { createContext, useState, useEffect} from 'react';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = loadDataFromLocalStorage('posts');
    setData(storedData);
  }, []);

  const addData = (title, content) => {
    const newData = [...data, { id: data.length + 1, title, content, author, image, timestamp:new Date().toLocaleString() }];
    setData(newData);
    saveDataToLocalStorage('posts', newData);
  };
  
  const updateData = (id, updateData) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...updateData } : item
    );
    setData(updatedData);
    saveDataToLocalStorage('posts', updatedData);
  };

  const deleteData = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    saveDataToLocalStorage('posts', filteredData);
  };

  return (
    <MyContext.Provider value={{ data, addData, updateData, deleteData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

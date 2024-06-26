import React, { useState, useContext } from "react";
import styled from "styled-components";
import MyContext from "../../contexts/MyContext";

// Update 게시판 container
const UpdateContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #4cb3ab;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  flex: 1;
`;

const FormSubGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #4cb3ab;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ImagePreview = styled.img`
  width: 100%;
  margin: 10px;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 4px;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff3333;
  }
`;
const SubmitButton = styled.button`
  background-color: #4cb3ab;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3a9a8a;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  width: 100%;
  justifycontent: spaceBetween;
`;

const UpdatePage = (props) => {
  const { data, updateData, deleteData } = useContext(MyContext);
  const [title, setTitle] = useState(data[0].title);
  const [content, setContent] = useState(data[0].content);
  const [images, setImages] = useState(data[0].images);
  const [mainImage, setMainImage] = useState(images[0]);
  //onSubmit UpdateData
  const onSubmit = (data) => {
    try {
      updateData(data.id, data);
    } catch (error) {
      alert("업데이트 도중 에러가 발생하였습니다.");
      return;
    }
    alert("업데이트가 완료되었습니다.");
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length > 5) {
      alert("You can upload up to 5 images.");
      return;
    } else {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let updatePost = {
      id: data[0].id,
      title,
      author: data[0].author,
      content,
      createTime: data[0].createTime,
      images,
    };
    onSubmit(updatePost);
  };
  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleMainImageSelect = (image) => {
    setMainImage(image);
  };

  const handleTitleChange = (e) => {
    setTitle((prev) => e.target.value);
  };
  const handleContentChange = (e) => {
    setContent((prev) => e.target.value);
  };
  const handlePostDelete = () => {
    deleteData(data[0].id);
    //navigate Logic
  };
  return (
    <>
      <h1>Edit Post</h1>

      <UpdateContainer>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" id="id" value={data[0].id} />
          <FormGroup>
            <Label>Title</Label>
            <Input value={title} onChange={handleTitleChange} name="title" />
          </FormGroup>
          <FormSubGroup>
            <FormGroup>
              <Label>Author</Label>
              <Input value={data[0].author} readOnly name="author" />
            </FormGroup>
            <FormGroup>
              <Label>CreateTime</Label>
              <Input value={data[0].createTime} readOnly name="createTime" />
            </FormGroup>
          </FormSubGroup>
          <FormGroup>
            <Label>Content</Label>
            <Textarea
              value={content}
              onChange={handleContentChange}
              name="content"
            />
          </FormGroup>
          <FormGroup>
            <Label>Main Image</Label>
            {mainImage && <ImagePreview src={mainImage} alt="Main" />}
          </FormGroup>
          <FormGroup>
            <Label>Upload Images</Label>
            <Input
              type="file"
              multiple
              defaultValue={null}
              onChange={handleImageUpload}
            />
            <ImageWrap>
              {images.map((image, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                  key={index}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => handleMainImageSelect(image)}
                    style={{
                      cursor: "pointer",
                      width: "100px",
                      height: "100px",
                      margin: "10px",
                    }}
                  />
                  <DeleteButton
                    type="button"
                    onClick={() => handleImageDelete(index)}
                  >
                    Delete Image
                  </DeleteButton>
                </div>
              ))}
            </ImageWrap>
          </FormGroup>
          <ButtonWrap>
            <SubmitButton type="submit">Update</SubmitButton>
            <DeleteButton onClick={handlePostDelete} type="button">
              Delete
            </DeleteButton>
          </ButtonWrap>
        </form>
      </UpdateContainer>
    </>
  );
};
// <ImagePreview src={URL.createObjectURL(mainImage)} alt="Main" />
export default UpdatePage;

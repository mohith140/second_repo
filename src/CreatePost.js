// CreatePost.js
import React, { useEffect, useState } from 'react';
import './css_files/CreatePost.css'; // Import your CSS file
// CreatePost.js
import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from './url';
export default function CreatePost(){
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [postCategory, setPostCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [postDescription, setPostDescription] = useState('');
  const {user}=useContext(UserContext)

  console.log(user+"iam usr")
  const navigate=useNavigate()
  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImage(file);
  };

  const handleCategoryChange = (e) => {
    setPostCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (postCategory && !categoryList.includes(postCategory)) {
      setCategoryList([...categoryList, postCategory]);
      setPostCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categoryList];
    updatedCategories.splice(index, 1);
    setCategoryList(updatedCategories);
  };

  const handleDescriptionChange = (e) => {
    setPostDescription(e.target.value);
  };

  // const handleCreatePost = () => {
  //   console.log({
  //     postTitle,
  //     postImage,
  //     categoryList,
  //     postDescription,
  //   });
  
  // };
  const handleCreate=async (e)=>{
  //  e.preventDefault()
    console.log(user)
    const post={
      "title":postTitle,
      "desc":postDescription,
      "user_name":user.username,
      "user_Id":user._id,
      "categories":categoryList
    }

    if(postImage){
      const data=new FormData()
      const filename=Date.now()+postImage.name
      data.append("img",filename)
      data.append("file",postImage)
      post.photo=filename
      // console.log(data)
      //img upload
      try{
        const imgUpload=await axios.post(URL+"/api/upload",data)
        // console.log(imgUpload.data)
      }
      catch(err){
        console.log(err)
      }
    }
    //post upload
     console.log(post)
    try{
      const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
      navigate("/posts/post/"+res.data._id)      
      // console.log(res.data)

    }
    catch(err){
      console.log(err)
    }
}


  return (<>

    <div className="post-container">
      <label className="form-label">Post Title:</label>
      <input className="form-input" type="text" value={postTitle} onChange={handleTitleChange} />

      <label className="form-label">Post Image:</label>
      <input className="form-input" type="file" accept="image/*" onChange={handleImageChange} />

      <label className="form-label">Post Category:</label>
      <input className="form-input" type="text" value={postCategory} onChange={handleCategoryChange} />
      <button className="form-button" onClick={handleAddCategory}>Add Category</button>
      <div>
        Categories:
        <ul className="category-list">
          {categoryList.map((category, index) => (
            <li key={index} className="category-item">
              {category}
              <button className="delete-button" onClick={() => handleDeleteCategory(index)}>
               <FaDeleteLeft/>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <label className="form-label">Post Description:</label>
      <textarea className="form-textarea" value={postDescription} onChange={handleDescriptionChange}></textarea>

      <button className="form-button" onClick={handleCreate}>
        Create Post
      </button>
    </div></>
  );
};


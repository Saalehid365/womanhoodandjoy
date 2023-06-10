import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const Createnew = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const createNewPost = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();

    const response = await fetch("https://womanhood.onrender.com/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
    if (redirect) {
      return <Navigate to={"/"} />;
    }
    console.log(redirect);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pt-12">
      <h2 className="text-2xl font-bold">Create new post</h2>
      <form
        onSubmit={createNewPost}
        className="w-2/3 h-full flex flex-col justify-evenly "
      >
        <input
          className="border pl-2 h-12"
          placeholder="title"
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className="border pl-2 h-12"
          placeholder="summary"
          type="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></input>
        <input type="file" onChange={(e) => setFiles(e.target.files)}></input>
        <ReactQuill
          className=" h-2/3 text-start border-none mb-12 "
          modules={modules}
          formats={formats}
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />
        <div className="flex justify-center">
          <button className="w-36 rounded-sm bg-blue-300"> Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default Createnew;

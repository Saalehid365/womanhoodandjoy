import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../user";

const Postpage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
        console.log(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div>
      {userInfo.id === postInfo.author._id && (
        <Link to={`/edit/${postInfo._id}`}>Edit post</Link>
      )}
      <h2>{postInfo.title}</h2>
      <div className="h-12 w-12">
        <img
          alt="cover"
          src={`https://womanhood.onrender.com/${postInfo.cover}`}
        ></img>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};

export default Postpage;

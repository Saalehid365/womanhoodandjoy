import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../user";
import { FaPencilAlt, FaTags } from "react-icons/fa";
import Socials from "../home/socials";

const Postpage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div className="flex justify-center pb-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-end w-full"></div>

        <div
          className="flex flex-col h-2/3 w-2/3  justify-center items-center
        "
        >
          {userInfo.id === postInfo.author._id && (
            <div className="w-3/4 flex justify-end pb-2">
              <Link
                to={`/edit/${postInfo._id}`}
                className="flex w-24 justify-between"
              >
                Edit post
                <FaPencilAlt />
              </Link>
            </div>
          )}
          <img
            className="h-3/4 w-3/4"
            alt="cover"
            src={`http://localhost:4000/${postInfo.cover}`}
          ></img>
        </div>
        <h2 className="text-gray-400  w-36 h-10 flex items-center justify-center">
          {postInfo.catergory}
        </h2>
        <h2 className="py-4 text-4xl font-thin">{postInfo.title}</h2>
        <div
          className="w-2/4 text-start text-gray-400"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
        <div className="w-2/4 items-start pt-6 text-gray-800">
          <div className="flex w-60 justify-evenly items-center">
            <FaTags />
            <h3 className="text-gray-300 pl-2">
              Health, Lifestyle, Food, Travel
            </h3>
          </div>
        </div>
        <div className="w-2/4 flex justify-between pt-8 text-gray-500">
          <h2 className="font-thin">Jun 13, 2023</h2>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Postpage;

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../user";
import { FaPencilAlt, FaTags } from "react-icons/fa";
import Socials from "../home/socials";
import Abouticon from "../contact/abouticon";
import Subscribeicon from "./subscribeicon";
import Instagrampost from "./instagrampost";

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
      <div className="flex flex-col justify-center items-center w-2/3 pt-10">
        <div className="flex flex-col h-96 w-3/4  justify-center items-center pb-2">
          {userInfo.id === postInfo.author._id && (
            <div className="w-full flex justify-end pb-2">
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
            className="h-full w-2/3 "
            alt="cover"
            src={`http://localhost:4000/${postInfo.cover}`}
          ></img>
        </div>
        <h2 className=" pt-4 text-gray-400  w-36 h-10 flex items-center justify-center">
          {postInfo.catergory}
        </h2>
        <h2
          className="py-4 text-4xl font-thin w-2/3 
        "
        >
          {postInfo.title}
        </h2>
        <div
          className="w-3/4 text-start text-gray-400 pt-6"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
        <div className="w-3/4 items-start pt-6 text-gray-800">
          <div className="flex w-96 justify-start items-center">
            <FaTags />
            <div className="text-gray-300 pl-2 w-72 flex justify-evenly">
              <Link
                to="/filteredbeautypage"
                className="hovewr:border hover:rounded-l-full w-24 hover:text-gray-100 hover:bg-gray-800"
              >
                Beauty
              </Link>
              <Link
                to="/filteredlifestylepage"
                className="hovewr:border hover:rounded-l-full w-24 hover:text-gray-100 hover:bg-gray-800"
              >
                Lifestyle
              </Link>
              <Link
                to="/filteredfoodpage"
                className="hovewr:border hover:rounded-l-full w-24 hover:text-gray-100 hover:bg-gray-800"
              >
                Food
              </Link>
              <Link
                to="/filteredtravelpage"
                className="hovewr:border hover:rounded-l-full w-24 hover:text-gray-100 hover:bg-gray-800"
              >
                Travel
              </Link>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex justify-between pt-8 text-gray-500">
          <h2 className="font-thin">Jun 13, 2023</h2>
          <Socials />
        </div>
      </div>
      <div className=" flex flex-col items-start p-4 ">
        <Abouticon />
        <Subscribeicon />
        <Instagrampost />
      </div>
    </div>
  );
};

export default Postpage;

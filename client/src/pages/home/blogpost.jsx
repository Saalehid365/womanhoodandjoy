import React from "react";

const BlogPost = () => {
  return (
    <div className="flex  items-center  h-60 pb-6 border-b-2 pt-4">
      <img
        src="https://cdn.shopify.com/s/files/1/0398/3153/5778/articles/557750845602_600x600_crop_center.png?v=1661958608"
        className="h-full w-60 rounded-lg"
      ></img>
      <div className="flex flex-col items-start justify-evenly h-full px-4 w-2/3">
        <h3>Blog title</h3>

        <h3 className="text-start">
          Lorem ipsum dolor sit amet conseetur, adipisicing elit. At
          voluptatibus ducimus nisi officia unde earum sed natus rem explicabo
          nam?
        </h3>
        <div className="flex w-60 justify-between items-start">
          <h4>Author</h4>
          <h4>5-6-2023</h4>
          <h4>Duration</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

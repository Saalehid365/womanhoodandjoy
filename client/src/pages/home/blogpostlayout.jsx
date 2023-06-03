import React from "react";

const Blogpostlayout = () => {
  return (
    <div className="flex flex-col w-72  items-start justify-evenly h-full">
      <img
        src="https://cdn.shopify.com/s/files/1/0398/3153/5778/articles/557750845602_600x600_crop_center.png?v=1661958608"
        className="h-48 w-full rounded-lg pb-4"
      ></img>
      <h4 className="text-xs text-gray-500 pb-2">catergory</h4>
      <h3 className="pb-2 text-start font-bold text-xl">
        The benefits of eating healthy on a gaps diet
      </h3>

      <h3 className="text-gray-600 text-sm text-start pb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
        voluptatibus ducimus nisi officia unde earum sed natus rem explicabo
        nam?
      </h3>
      <div className="flex items-start justify-between w-32 text-gray-600 text-xs">
        <h4>Author</h4>
        <h4>5-6-2023</h4>
      </div>
    </div>
  );
};

export default Blogpostlayout;

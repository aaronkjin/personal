import React from "react";
import Image from "next/image";

const Project = ({ img, name, description, onClick }) => {
  return (
    <div className="rounded-lg p-2 first:ml-0 link laptop:w-[85%]">
      <div className="flex flex-col laptop:mt-5">
        <div
          className="relative rounded-lg transition-all ease-out duration-300 h-48 tablet:h-52 laptop:h-56 cursor-pointer overflow-hidden"
          onClick={onClick}
        >
          <Image
            alt={name}
            className="object-cover rounded-lg hover:scale-110 transition-all ease-out duration-300"
            src={img}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="mt-5 text-xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-sm opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default Project;

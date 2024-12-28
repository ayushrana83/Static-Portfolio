import C from "../assets/svg/C.svg";
import Cpp from "../assets/svg/Cpp.svg";
import Css from "../assets/svg/Css.svg";
import Express from "../assets/svg/Express.svg";
import Html from "../assets/svg/Html.svg";
import Java from "../assets/svg/Java.svg";
import Javascript from "../assets/svg/Javascript.svg";
import MongoDb from "../assets/svg/MongoDb.svg";
import Node from "../assets/svg/Node.svg";
import React from "../assets/svg/React.svg";
import Tailwind from "../assets/svg/Tailwind.svg";
import Typescript from "../assets/svg/Typescript.svg";
export default function Skills() {
  const svgs = [
    { name: "C", code: C },
    { name: "C++", code: Cpp },
    { name: "CSS", code: Css },
    { name: "Express.js", code: Express },
    { name: "HTML", code: Html },
    { name: "Java", code: Java },
    { name: "Javascript", code: Javascript },
    { name: "MongoDb", code: MongoDb },
    { name: "Node.js", code: Node },
    { name: "React.js", code: React },
    { name: "Tailwind Css", code: Tailwind },
    { name: "Typescript", code: Typescript },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-32 ">
      <h1 className="text-3xl m-7 text-center">Skills</h1>
      <div className="items-center justify-center flex flex-wrap gap-4">
        {svgs.map((svg, index) => (
          <div className="p-4 w-40 h-52">
            <span className="text-center">{svg.name}</span>
            <img className="object-fit" src={svg.code} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

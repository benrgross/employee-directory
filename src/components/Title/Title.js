import { IoLogoReact } from "react-icons/io5";

import "./style.css";

export const Title = () => {
  return (
    <>
      <div className="header bg-white d-flex justify-content-center bg-white shadow text-gray-800">
        <header className="navbar text-center ">
          {" "}
          <IoLogoReact className="logo" />
          Employee Directory
        </header>
      </div>
      <div className=" row h4 d-flex justify-content-left ">
        <h4> Search Direcory by Name</h4>
      </div>
      <div className=" row h5 d-flex justify-content-left ">
        <h5> Order Table by Name or City</h5>
      </div>
    </>
  );
};

export default Title;
